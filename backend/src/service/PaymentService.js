const httpStatus = require("http-status");
const PaymentsDao = require("../dao/PaymentsDao");
const UserDao = require("../dao/UserDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");
const { userConstant } = require("../config/constant");
const { Op } = require("sequelize");
const fs = require("fs");
const PdfService = require("../service/RegInvoiceService");

const dir = "./files/invoices/";

class PaymentService {
  constructor() {
    this.paymentsDao = new PaymentsDao();
    this.userDao = new UserDao();
    this.PdfService = new PdfService();
  }

  getPayments = async (page, limit, search, offset) => {
    const totalRows = await this.paymentsDao.getCount(search);
    const totalPage = Math.ceil(totalRows / limit);

    const result = await this.paymentsDao.getPaymentsPage(
      search,
      offset,
      limit
    );

    return responseHandler.returnSuccess(
      httpStatus.OK,
      "Payment data successfully retrieved.",
      {
        result: result,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage,
      }
    );
  };

  createPayment = async (reqBody) => {
    try {
      let message = "Payment successfully added.";

      let paymentsData = await this.paymentsDao.create(reqBody);

      if (!paymentsData) {
        message = "Failed to add payment.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        paymentsData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updatePayment = async (order_id, body) => {
    const message = "Payment successfully updated!";

    const updateData = await this.paymentsDao.updateWhere(
      {
        transaction_status: body.transaction_status,
        response_midtrans: JSON.stringify(body),
      },
      { order_id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  updatePaymentManual = async (id, body) => {
    const message = "Payment successfully updated!";
    const path = dir + Date.now() + "_invoice.pdf";

    // Tambahkan generate pdf invoice dan kirim email jika diperlukan
    if (body.transaction_status === "settlement") {
      // generate invoice
      var dataPay = await this.paymentsDao.getById(id);

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      this.PdfService.createInvoice(dataPay[0].toJSON(), path);
    }

    const updateData = await this.paymentsDao.updateWhere(
      {
        transaction_status: body.transaction_status,
        invoice_path: path,
        // remark: req.body.remark,
        // payment_proof: req.file == undefined ? null : req.file.path,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, dataPay);
    }
  };

  uploadPayment = async (id, req) => {
    const message = "Payment successfully updated!";
    // console.log(req.file.path);
    const updateData = await this.paymentsDao.updateWhere(
      {
        // transaction_status: req.body.transaction_status,
        remark: req.body.remark,
        payment_proof: req.file == undefined ? null : req.file.path,
        mime_type: req.file.mimetype,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showPayment = async (id) => {
    const message = "Payment successfully retrieved!";

    let payment = await this.paymentsDao.findById(id);

    if (!payment) {
      return responseHandler.returnSuccess(
        httpStatus.OK,
        "Payment not found!",
        {}
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };

  showPaymentByOrderId = async (order_id) => {
    try {
      const message = "Payment successfully retrieved!";

      let payment = await this.paymentsDao.findByWhere({ order_id });

      if (!payment) {
        return responseHandler.returnSuccess(
          httpStatus.OK,
          "Payment not found!",
          {}
        );
      }

      return responseHandler.returnSuccess(httpStatus.OK, message, payment);
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  showAll = async (id) => {
    const message = "Payment successfully retrieved!";

    let payment = await this.paymentsDao.findAllData();

    if (!payment) {
      return responseHandler.returnSuccess(
        httpStatus.OK,
        "Payment not found!",
        {}
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };

  showAllFull = async (id) => {
    const message = "Payment successfully retrieved!";

    let payment = await this.paymentsDao.findAllDataFull();

    if (!payment) {
      return responseHandler.returnSuccess(
        httpStatus.OK,
        "Payment not found!",
        {}
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };

  showPaymentByUserId = async (user_id) => {
    const message = "Payment successfully retrieved!";

    let payment = await this.paymentsDao.findOneByWhere({
      user_id,
      payment_type: "manual_transfer",
    });

    if (!payment) {
      return responseHandler.returnSuccess(
        httpStatus.OK,
        "Payment not found!",
        {}
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };

  showAllPaymentByUserId = async (user_id) => {
    const message = "Payments successfully retrieved!";

    let payment = await this.paymentsDao.findAllWithUserId(user_id);

    if (!payment) {
      return responseHandler.returnSuccess(
        httpStatus.OK,
        "Payment not found!",
        {}
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };

  showAllFullPaymentByUserId = async (user_id) => {
    const message = "Payments successfully retrieved!";

    let payment = await this.paymentsDao.findAllDataFullByUserId(user_id);

    if (!payment) {
      return responseHandler.returnSuccess(
        httpStatus.OK,
        "Payment not found!",
        {}
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };
  updateRegStateByOrderId = async (order_id) => {
    try {
      const message = "Payment successfully updated!";

      let payment = await this.paymentsDao.findOneByWhere({ order_id });

      if (!payment) {
        return responseHandler.returnSuccess(
          httpStatus.OK,
          "Payment not found!",
          {}
        );
      }

      const id = payment.dataValues.user_id;

      await this.userDao.updateWhere(
        {
          reg_state: userConstant.FORM_INPUT_REG_STATE,
        },
        { id }
      );

      return responseHandler.returnSuccess(httpStatus.OK, message, payment);
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateRegStateById = async (_id) => {
    try {
      const message = "Payment successfully updated!";
      // console.log("Masuk dengan ID :" + _id);
      let payment = await this.paymentsDao.findById(_id);

      if (!payment) {
        return responseHandler.returnSuccess(
          httpStatus.OK,
          "Payment not found!",
          {}
        );
      }

      const id = payment.dataValues.user_id;
      const is_full_payment = payment.dataValues.full_payment;
      console.log("User ID :" + id);
      if (is_full_payment) {
        await this.userDao.updateWhere(
          {
            reg_state: 6,
            active_state: 9,
          },
          { id }
        );
      } else {
        await this.userDao.updateWhere(
          {
            reg_state: userConstant.FORM_INPUT_REG_STATE,
            active_state: userConstant.FORM_INPUT_REG_STATE,
          },
          { id }
        );
      }

      return responseHandler.returnSuccess(httpStatus.OK, message, payment);
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  exportToExcel = async (full_payment) => {
    const message = "Payment successfully exported!";

    let payment = await this.paymentsDao.findSettlementByFullPayment(
      full_payment
    );

    if (!payment) {
      return responseHandler.returnSuccess(
        httpStatus.OK,
        "Payment not found!",
        {}
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };

  createExcel = async (data, path) => {
    this.pdfToExcel(data.form_path, path);

    return responseHandler.returnSuccess(
      httpStatus.OK,
      "Successfully Exported",
      {}
    );
  };
}
module.exports = PaymentService;
