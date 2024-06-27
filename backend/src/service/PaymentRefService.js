const httpStatus = require("http-status");
const PaymentRefDao = require("../dao/PaymentRefDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class PaymentRefService {
  constructor() {
    this.paymentRefDao = new PaymentRefDao();
  }

  createPaymentRef = async (reqBody) => {
    try {
      let message = "Payment reference successfully added.";

      let data = await this.paymentRefDao.create(reqBody);

      if (!data) {
        message = "Failed to add payment reference.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      return responseHandler.returnSuccess(httpStatus.CREATED, message, data);
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updatePaymentRef = async (id, body) => {
    const message = "Payment reference successfully updated!";

    let payment = await this.paymentRefDao.findById(id);

    if (!payment) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Payment reference not found!"
      );
    }

    const updateData = await this.paymentRefDao.updateWhere(
      {
        code: body.code,
        level: body.level,
        desc: body.desc,
        sub_desc: body.sub_desc,
        amount: body.amount,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showPaymentRef = async (id) => {
    const message = "Payment reference successfully retrieved!";

    let payment = await this.paymentRefDao.findById(id);

    if (!payment) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Payment reference not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };

  showAllPaymentRef = async () => {
    const message = "All payment reference successfully retrieved!";

    let payment = await this.paymentRefDao.findAll();

    if (!payment) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Payment reference not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };

  deletePaymentRef = async (id) => {
    const message = "Payment reference successfully deleted!";

    let payment = await this.paymentRefDao.deleteByWhere({ id });

    if (!payment) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Payment reference not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, payment);
  };
}
module.exports = PaymentRefService;
