const express = require("express");
const MedicalHistoryController = require("../controllers/MedicalHistoryController");
const MedicalHistoryValidator = require("../validator/MedicalHistoryValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const medicalHistoryController = new MedicalHistoryController();
const medicalHistoryValidator = new MedicalHistoryValidator();

router.post(
  "/create",
  auth(),
  medicalHistoryValidator.medicalHistoryCreateUpdateValidator,
  medicalHistoryController.create
);

router.put(
  "/update/:id",
  auth(),
  medicalHistoryValidator.medicalHistoryCreateUpdateValidator,
  medicalHistoryController.update
);

router.get("/show/:id", auth(), medicalHistoryController.show);

router.get(
  "/show-all/:id",
  auth(),
  medicalHistoryController.showAllByCandidateId
);

router.delete("/delete/:id", auth(), medicalHistoryController.delete);

module.exports = router;
