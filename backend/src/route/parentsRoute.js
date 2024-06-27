const express = require("express");
const ParentsController = require("../controllers/ParentsController");
const ParentValidator = require("../validator/ParentValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const parentsController = new ParentsController();
const parentValidator = new ParentValidator();

router.post(
  "/create",
  auth(),
  parentValidator.parentCreateUpdateValidator,
  parentsController.create
);

router.post(
  "/create-bulk",
  auth(),
  // parentValidator.parentCreateUpdateValidator,
  parentsController.createBulk
);

router.put(
  "/update/:id",
  auth(),
  parentValidator.parentCreateUpdateValidator,
  parentsController.update
);

router.put(
  "/update-bulk",
  auth(),
  // parentValidator.parentCreateUpdateValidator,
  parentsController.updateBulk
);

router.get("/show/:id", auth(), parentsController.show);

router.get("/show-all/:id", auth(), parentsController.showAllByCandidateId);

router.get("/show-all", auth(), parentsController.showAll);

router.delete("/delete/:id", auth(), parentsController.delete);

module.exports = router;
