const express = require("express");
const PaymentsController = require("../controllers/PaymentsController");
const PaymentValidator = require("../validator/PaymentValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const paymentsController = new PaymentsController();
const paymentValidator = new PaymentValidator();

router.post(
  "/create",
  auth(),
  paymentValidator.paymentCreateUpdateValidator,
  paymentsController.reqPaymentInquiry
);

router.post("/notification", auth(), paymentsController.getPaymentNotification);

router.put(
  "/update/:id",
  auth(),
  // siblingValidator.siblingUpdateValidator,
  paymentsController.update
);

router.put(
  "/upload/:id",
  auth(),
  // siblingValidator.siblingUpdateValidator,
  paymentsController.upload
);

router.get("/", auth(), paymentsController.getAll);

router.get("/show-order/:id", auth(), paymentsController.getPaymentByOrderId);

router.get("/show/:id", auth(), paymentsController.show);

router.get("/show-all", auth(), paymentsController.showAll);

router.get("/show-full", auth(), paymentsController.showAllFull);

router.get("/show-full/:id", auth(), paymentsController.showAllFullByUserId);

router.get("/show-all/:id", auth(), paymentsController.showByUserId);

router.get("/show-by-userid/:id", auth(), paymentsController.showAllByUserId);

router.post("/file-buff", auth(), paymentsController.fileBuff);

router.post("/file-download", auth(), paymentsController.fileDownload);

router.get("/export-settlement", auth(), paymentsController.exportExcel);

module.exports = router;
