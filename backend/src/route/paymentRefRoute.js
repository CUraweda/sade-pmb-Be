const express = require("express");
const PaymentRefController = require("../controllers/PaymentRefController");
const PaymentRefValidator = require("../validator/PaymentRefValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const paymentRefController = new PaymentRefController();
const paymentRefValidator = new PaymentRefValidator();

router.post(
  "/create",
  auth(),
  paymentRefValidator.paymentRefCreateUpdateValidator,
  paymentRefController.create
);

router.put(
  "/update/:id",
  auth(),
  paymentRefValidator.paymentRefCreateUpdateValidator,
  paymentRefController.update
);

router.get("/show/:id", auth(), paymentRefController.show);

router.get("/show-all", auth(), paymentRefController.showAll);

router.delete("/delete/:id", auth(), paymentRefController.delete);

module.exports = router;
