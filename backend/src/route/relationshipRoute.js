const express = require("express");
const RelationshipController = require("../controllers/RelationshipController");
const RelationshipValidator = require("../validator/RelationshipValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const relationshipController = new RelationshipController();
const relationshipValidator = new RelationshipValidator();

router.post(
  "/create",
  auth(),
  relationshipValidator.relationshipCreateUpdateValidator,
  relationshipController.create
);

router.put(
  "/update/:id",
  auth(),
  relationshipValidator.relationshipCreateUpdateValidator,
  relationshipController.update
);

router.get("/show/:id", auth(), relationshipController.show);

router.get(
  "/show-all/:id",
  auth(),
  relationshipController.showAllByCandidateId
);

router.delete("/delete/:id", auth(), relationshipController.delete);

module.exports = router;
