const express = require("express");
const QuestionnaireController = require("../controllers/QuestionnaireController");
const QuestionnaireValidator = require("../validator/QuestionnaireValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const questionnaireController = new QuestionnaireController();
const questionnaireValidator = new QuestionnaireValidator();

router.post(
  "/create",
  auth(),
  questionnaireValidator.queCreateUpdateValidator,
  questionnaireController.create
);

router.put(
  "/update/:id",
  auth(),
  questionnaireValidator.queCreateUpdateValidator,
  questionnaireController.update
);

router.get("/show/:id", auth(), questionnaireController.show);

router.get(
  "/show-all/:id",
  auth(),
  questionnaireController.showAllByCandidateId
);

router.delete("/delete/:id", auth(), questionnaireController.delete);

module.exports = router;
