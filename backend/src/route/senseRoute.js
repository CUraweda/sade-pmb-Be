const express = require("express");
const SensesController = require("../controllers/SensesController");
const SenseValidator = require("../validator/SenseValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const sensesController = new SensesController();
const senseValidator = new SenseValidator();

router.post(
  "/create",
  auth(),
  senseValidator.senseCreateUpdateValidator,
  sensesController.create
);

router.put(
  "/update/:id",
  auth(),
  senseValidator.senseCreateUpdateValidator,
  sensesController.update
);

router.get("/show/:id", auth(), sensesController.show);

router.get("/show-all/:id", auth(), sensesController.showAllByCandidateId);

router.delete("/delete/:id", auth(), sensesController.delete);

module.exports = router;
