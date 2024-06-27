const express = require("express");
const DistrictsController = require("../controllers/DistrictsController");
const DistrictValidator = require("../validator/DistrictValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const districtsController = new DistrictsController();
const districtValidator = new DistrictValidator();

router.post(
  "/create",
  auth(),
  districtValidator.districtCreateUpdateValidator,
  districtsController.create
);

router.put(
  "/update/:id",
  auth(),
  districtValidator.districtCreateUpdateValidator,
  districtsController.update
);

router.get("/show/:id", auth(), districtsController.show);

router.get("/show-all/:id", auth(), districtsController.showAll);

router.delete("/delete/:id", auth(), districtsController.delete);

module.exports = router;
