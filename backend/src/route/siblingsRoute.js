const express = require("express");
const SiblingsController = require("../controllers/SiblingsController");
const SiblingValidator = require("../validator/SiblingValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const siblingsController = new SiblingsController();
const siblingValidator = new SiblingValidator();

router.post(
  "/create",
  auth(),
  siblingValidator.siblingCreateValidator,
  siblingsController.create
);

router.post(
  "/create-bulk",
  auth(),
  // siblingValidator.siblingCreateValidator,
  siblingsController.createBulk
);

router.put(
  "/update/:id",
  auth(),
  siblingValidator.siblingUpdateValidator,
  siblingsController.update
);

router.get("/show/:id", auth(), siblingsController.show);

router.get("/show-all/:id", auth(), siblingsController.showAllByUserId);

router.delete("/delete/:id", auth(), siblingsController.delete);

module.exports = router;
