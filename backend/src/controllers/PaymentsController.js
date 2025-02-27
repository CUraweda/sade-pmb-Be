const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const PaymentService = require("../service/PaymentService");
const PdfService = require("../service/RegInvoiceService");
const logger = require("../config/logger");
const midtransClient = require("midtrans-client");
const httpStatus = require("http-status");
const uploadFile = require("../middlewares/uploadProof");
const fs = require("fs");
// const dir_ex = "./files/export/excel";
const XLSX = require("xlsx");

//----Dev
let core = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: "SB-Mid-server-jn4H8lXb6zNugkFk4nSzEbHt",
  clientKey: "SB-Mid-client-9nibv7gECjSZRYmJ",
});

let apiClient = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-jn4H8lXb6zNugkFk4nSzEbHt",
  clientKey: "SB-Mid-client-9nibv7gECjSZRYmJ",
});

// let core = new midtransClient.CoreApi({
//   isProduction: true,
//   serverKey: "Mid-server-s5kS2lnVswrXaHTaPOfeNyCZ",
//   clientKey: "Mid-client-5gjR7myK73E-r1lp",
// });

// let apiClient = new midtransClient.Snap({
//   isProduction: true,
//   serverKey: "Mid-server-s5kS2lnVswrXaHTaPOfeNyCZ",
//   clientKey: "Mid-client-5gjR7myK73E-r1lp",
// });

const dir = "./files/invoices/";

class PaymentsController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.paymentService = new PaymentService();
    this.PdfService = new PdfService();
  }

  getAll = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 10;
      const search = req.query.search_query || "";
      const offset = limit * page;
      const { payment_type, transaction_status, full_payment } = req.query

      const responseData = await this.paymentService.getPayments(
        page,
        limit,
        search,
        offset, 
        { payment_type, transaction_status, full_payment }
      );

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  reqPaymentInquiry = async (req, res) => {
    if (req.body.payment_type.toLowerCase() === "manual_transfer") {
      let params = {
        user_id: req.body.user_id,
        order_id: req.body.order_id,
        payment_type: req.body.payment_type,
        gross_amount: req.body.gross_amount,
        transaction_status: "pending",
        full_payment: req.body.full_payment,
      };

      this.paymentService.createPayment(params);

      res.status(httpStatus.CREATED).send({
        status: true,
        code: httpStatus.OK,
        message: "Payment successfully created.",
      });
    } else {
      let params = {
        payment_type: req.body.payment_type,
        transaction_details: {
          gross_amount: req.body.gross_amount,
          order_id: req.body.order_id,
        },
        bank_transfer: {
          bank: req.body.bank,
        },
      };

      if (req.body.bank.toLowerCase() === "mandiri") {
        params = {
          payment_type: "echannel",
          transaction_details: {
            order_id: req.body.order_id,
            gross_amount: req.body.gross_amount,
          },
          echannel: {
            bill_info1: "Payment:",
            bill_info2: "Online purchase",
          },
        };
      }

      await core
        .charge(params)
        .then((chargeResponse) => {
          console.log("chargeResponse:", chargeResponse.status_code);

          let params = {
            user_id: req.body.user_id,
            order_id: req.body.order_id,
            payment_type: req.body.payment_type,
            gross_amount: req.body.gross_amount,
            transaction_status: chargeResponse.transaction_status,
            response_midtrans: JSON.stringify(chargeResponse),
            full_payment: req.body.full_payment,
          };

          this.paymentService.createPayment(params);

          res.status(parseInt(chargeResponse.status_code)).send(chargeResponse);
        })
        .catch((e) => {
          console.log("Error occured:", e.ApiResponse);
          logger.error(e);
          res.status(parseInt(e.ApiResponse.status_code)).send(e.ApiResponse);
        });
    }
  };

  getPaymentNotification = async (req, res) => {
    apiClient.transaction.notification(req.body).then((statusResponse) => {
      let orderId = statusResponse.order_id;
      let transactionStatus = statusResponse.transaction_status;
      let fraudStatus = statusResponse.fraud_status;

      console.log(
        `Transaction notification received. Order ID: ${orderId}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`
      );

      // Sample transactionStatus handling logic

      if (transactionStatus == "capture") {
        // capture only applies to card transaction, which you need to check for the fraudStatus
        if (fraudStatus == "challenge") {
          // TODO set transaction status on your databaase to 'challenge'
        } else if (fraudStatus == "accept") {
          // TODO set transaction status on your databaase to 'success'
        }
      } else if (transactionStatus == "settlement") {
        // TODO set transaction status on your databaase to 'success'
        console.log("Masuk Settlement");
        this.paymentService.updatePayment(orderId, statusResponse);
        this.paymentService.updateRegStateByOrderId(orderId);

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        this.PdfService.createInvoice("", dir);

        res.status(parseInt(statusResponse.status_code)).send(statusResponse);
      } else if (transactionStatus == "deny") {
        // TODO you can ignore 'deny', because most of the time it allows payment retries
        // and later can become success
      } else if (
        transactionStatus == "cancel" ||
        transactionStatus == "expire"
      ) {
        // TODO set transaction status on your databaase to 'failure'
      } else if (transactionStatus == "pending") {
        // TODO set transaction status on your databaase to 'pending' / waiting payment
        console.log("Masuk Pending");
        res.status(parseInt(statusResponse.status_code)).send(statusResponse);
      }
    });
  };
  getPaymentByOrderId = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.paymentService.showPaymentByOrderId(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  show = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.paymentService.showPayment(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAll = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.paymentService.showAll();

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAllFull = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.paymentService.showAllFull();

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showByUserId = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.paymentService.showPaymentByUserId(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAllByUserId = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.paymentService.showAllPaymentByUserId(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAllFullByUserId = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.paymentService.showAllFullPaymentByUserId(
        id
      );

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  update = async (req, res) => {
    try {
      // await uploadFile(req, res);

      var id = req.params.id;

      const responseData = await this.paymentService.updatePaymentManual(
        id,
        req.body
      );
      await this.paymentService.updateRegStateById(id);
      const { message, data } = responseData.response;
      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  upload = async (req, res) => {
    try {
      await uploadFile(req, res);

      var id = req.params.id;

      const responseData = await this.paymentService.uploadPayment(id, req);
      const { message, data } = responseData.response;
      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  fileBuff = async (req, res) => {
    try {
      const filePath = req.body.path;

      // console.log(filePath);

      var buffer = fs.readFileSync(filePath, { encoding: "base64" });
      // var bufferBase64 = new Buffer(buffer);
      res.status(200).send(buffer);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  fileDownload = async (req, res) => {
    try {
      const filePath = req.body.path;

      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          // File does not exist
          return res.status(404).send("File not found");
        }

        // File exists, initiate download
        res.download(filePath, (err) => {
          if (err) {
            // Handle download error
            console.error(err);
            res.status(500).send("Internal Server Error");
          }
        });
      });

      // res.download(filePath, function (err) {
      //   console.log(err);
      // });
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  // safeJsonStringify = (data) => {
  //   const seen = new WeakSet();
  //   return JSON.stringify(data, function (key, value) {
  //     if (typeof value === "object" && value !== null) {
  //       if (seen.has(value)) {
  //         return;
  //       }
  //       seen.add(value);
  //     }
  //     return value;
  //   });
  // };

  exportExcel = async (req, res) => {
    try {
      // var id = req.params.id;
      const full_payment = parseInt(req.query.full_payment) || 0;
      const filename_excel = Date.now() + "_settlement.xlsx";

      let paymentData = await this.paymentService.exportToExcel(full_payment);

      if (paymentData.response.data.length === 0) {
        res.status(httpStatus.BAD_GATEWAY).send({
          status: true,
          code: httpStatus.BAD_GATEWAY,
          message: "Payment data not found.",
        });
      } else {
        var jsonData = paymentData.response.data;
        const test = jsonData.map((payment) => payment.toJSON());
        console.log(test);

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(test);

        worksheet["A1"] = { v: "Tanggal", t: "s" }; // Column A
        worksheet["B1"] = { v: "Nama Lengkap", t: "s" }; // Column B
        worksheet["C1"] = { v: "Email", t: "s" }; // Column C
        worksheet["D1"] = { v: "Order ID", t: "s" }; // Column D
        worksheet["E1"] = { v: "Type Pembayaran", t: "s" }; // Column E
        worksheet["F1"] = { v: "Jumlah", t: "s" }; // Column F
        worksheet["G1"] = { v: "Status Transaksi", t: "s" }; // Column G
        worksheet["H1"] = { v: "Full Payment", t: "s" }; // Column H
        worksheet["I1"] = { v: "Keterangan", t: "s" }; // Column I
        worksheet["J1"] = { v: "Bukti Pembayaran", t: "s" }; // Column J

        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");

        // Create a buffer and send the XLSX file as a response
        const buffer = XLSX.write(workbook, {
          bookType: "xlsx",
          type: "buffer",
        });
        res.attachment(filename_excel);
        res.send(buffer);

        // res.status(httpStatus.OK).send(jsonData);
        // res.status(responseData.statusCode).send(responseData.response);
      }
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}
module.exports = PaymentsController;
