const express = require("express");
const EngagementsController = require("../controllers/EngagementsController");
const EngagementValidator = require("../validator/EngagementValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const engagementsController = new EngagementsController();
const engagementValidator = new EngagementValidator();

router.post(
  "/create",
  auth(),
  engagementValidator.engagementCreateUpdateValidator,
  engagementsController.create
);

router.put(
  "/update/:id",
  auth(),
  engagementValidator.engagementCreateUpdateValidator,
  engagementsController.update
);

router.get("/show/:id", auth(), engagementsController.show);

router.get("/show-all/:id", auth(), engagementsController.showAllByCandidateId);

router.delete("/delete/:id", auth(), engagementsController.delete);

module.exports = router;
