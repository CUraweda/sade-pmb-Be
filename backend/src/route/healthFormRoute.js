const express = require("express");
const HealthFormController = require("../controllers/HealthFormController");
const HealthFormValidator = require("../validator/HealthFormValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const healthFormController = new HealthFormController();
const healthFormValidator = new HealthFormValidator();

router.post(
  "/create",
  auth(),
  healthFormValidator.healthFormCreateUpdateValidator,
  healthFormController.create
);

router.put(
  "/update/:id",
  auth(),
  healthFormValidator.healthFormCreateUpdateValidator,
  healthFormController.update
);

router.get("/show/:id", auth(), healthFormController.show);

router.get("/show-all/:id", auth(), healthFormController.showAllByCandidateId);

router.delete("/delete/:id", auth(), healthFormController.delete);

module.exports = router;
