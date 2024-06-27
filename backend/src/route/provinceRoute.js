const express = require("express");
const ProvincesController = require("../controllers/ProvincesController");
const ProvinceValidator = require("../validator/ProvinceValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const provincesController = new ProvincesController();
const provinceValidator = new ProvinceValidator();

router.post(
  "/create",
  auth(),
  provinceValidator.provinceCreateUpdateValidator,
  provincesController.create
);

router.put(
  "/update/:id",
  auth(),
  provinceValidator.provinceCreateUpdateValidator,
  provincesController.update
);

router.get("/show/:id", auth(), provincesController.show);

router.get("/show-all", auth(), provincesController.showAll);

router.delete("/delete/:id", auth(), provincesController.delete);

module.exports = router;
