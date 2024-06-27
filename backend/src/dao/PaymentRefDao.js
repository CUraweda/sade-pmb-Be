const SuperDao = require("./SuperDao");
const models = require("../models");

const PaymentRef = models.paymentref;

class PaymentRefDao extends SuperDao {
  constructor() {
    super(PaymentRef);
  }
}

module.exports = PaymentRefDao;
