const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const RegInvoiceService = require("../service/RegInvoiceService");
const logger = require("../config/logger");
const fs = require("fs");

// const invoice = {
//   id: 3,
//   user_id: 1,
//   order_id: "order-1026",
//   payment_type: "bank_transfer",
//   gross_amount: 100000,
//   transaction_status: "settlement",
//   response_midtrans:
//     '{"status_code":"201","status_message":"OK, Mandiri Bill transaction is successful","transaction_id":"4e65bff2-5f0b-4015-a31e-892adf11c9bc","order_id":"order-1026","merchant_id":"G899174154","gross_amount":"100000.00","currency":"IDR","payment_type":"echannel","transaction_time":"2023-09-28 06:17:12","transaction_status":"pending","fraud_status":"accept","bill_key":"727919908143","biller_code":"70012","expiry_time":"2023-09-29 06:17:10"}',
//   full_payment: false,
//   remark: "Registrasi",
//   payment_proof: null,
//   created_at: "2023-09-27T23:17:11.000Z",
//   user: {
//     id: 1,
//     full_name: "Ruri Uthama, ST",
//     email: "rur.th05_test@gmail.com",
//   },
// };

// const invoice = {
//   shipping: {
//     name: "John Doe",
//     address: "1234 Main Street",
//     city: "San Francisco",
//     state: "CA",
//     country: "US",
//     postal_code: 94111,
//   },
//   items: [
//     {
//       item: "1",
//       description: "Toner Cartridge",
//       quantity: 2,
//       amount: 6000,
//     },
//     {
//       item: "2",
//       description: "USB Cable Extender",
//       quantity: 1,
//       amount: 2000,
//     },
//   ],
//   subtotal: 8000,
//   paid: 0,
//   invoice_nr: 1234,
// };

const dir = "./files/invoices/";

class ProvincesController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.regInvoiceService = new RegInvoiceService();
  }

  create = async (req, res) => {
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      //   const responseData = await this.pdfService.createInvoice(req.body);
      const responseData = await this.regInvoiceService.createInvoice(
        req.body,
        "./files/invoices/" + Date.now() + "_invoice.pdf"
      );

      // const { message, data } = responseData.response;

      // res.status(responseData.statusCode).send(responseData.response);
      res.status(200).send("Test");
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  //   update = async (req, res) => {
  //     try {
  //       var id = req.params.id;

  //       const responseData = await this.provinceService.updateProvince(
  //         id,
  //         req.body
  //       );

  //       const { message, data } = responseData.response;

  //       res.status(responseData.statusCode).send(responseData.response);
  //     } catch (e) {
  //       logger.error(e);
  //       res.status(httpStatus.BAD_GATEWAY).send(e);
  //     }
  //   };

  //   show = async (req, res) => {
  //     try {
  //       var id = req.params.id;

  //       const responseData = await this.provinceService.showProvince(id);

  //       const { message, data } = responseData.response;

  //       res.status(responseData.statusCode).send(responseData.response);
  //     } catch (e) {
  //       logger.error(e);
  //       res.status(httpStatus.BAD_GATEWAY).send(e);
  //     }
  //   };

  //   showAll = async (req, res) => {
  //     try {
  //       const responseData = await this.provinceService.showAllProvinces();

  //       const { message, data } = responseData.response;

  //       res.status(responseData.statusCode).send(responseData.response);
  //     } catch (e) {
  //       logger.error(e);
  //       res.status(httpStatus.BAD_GATEWAY).send(e);
  //     }
  //   };

  //   delete = async (req, res) => {
  //     try {
  //       var id = req.params.id;

  //       const responseData = await this.provinceService.deleteProvince(id);

  //       const { message, data } = responseData.response;

  //       res.status(responseData.statusCode).send(responseData.response);
  //     } catch (e) {
  //       logger.error(e);
  //       res.status(httpStatus.BAD_GATEWAY).send(e);
  //     }
  //   };
}

module.exports = ProvincesController;
