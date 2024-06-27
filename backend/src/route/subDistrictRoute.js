const express = require("express");
const SubDistrictsController = require("../controllers/SubDistrictsController");
const SubDistrictValidator = require("../validator/SubDistrictValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const subDistrictsController = new SubDistrictsController();
const subDistrictValidator = new SubDistrictValidator();

router.post(
  "/create",
  auth(),
  subDistrictValidator.subDistrictCreateUpdateValidator,
  subDistrictsController.create
);

router.put(
  "/update/:id",
  auth(),
  subDistrictValidator.subDistrictCreateUpdateValidator,
  subDistrictsController.update
);

router.get("/show/:id", auth(), subDistrictsController.show);

router.get("/show-all/:id", auth(), subDistrictsController.showAll);

router.delete("/delete/:id", auth(), subDistrictsController.delete);

module.exports = router;
