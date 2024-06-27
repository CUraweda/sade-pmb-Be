const express = require("express");
const CitiesController = require("../controllers/CitiesController");
const CityValidator = require("../validator/CityValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const citiesController = new CitiesController();
const cityValidator = new CityValidator();

router.post(
  "/create",
  auth(),
  cityValidator.cityCreateUpdateValidator,
  citiesController.create
);

router.put(
  "/update/:id",
  auth(),
  cityValidator.cityCreateUpdateValidator,
  citiesController.update
);

router.get("/show/:id", auth(), citiesController.show);

router.get("/show-all/:id", auth(), citiesController.showAll);

router.delete("/delete/:id", auth(), citiesController.delete);

module.exports = router;
