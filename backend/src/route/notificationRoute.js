const express = require("express");
const NotificationController = require("../controllers/NotificationController");
const NotificationValidator = require("../validator/NotificationValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const notificationController = new NotificationController();
const notificationValidator = new NotificationValidator();

router.post(
  "/create",
  auth(),
  notificationValidator.notificationCreateUpdateValidator,
  notificationController.create
);

router.put(
  "/update/:id",
  auth(),
  notificationValidator.notificationCreateUpdateValidator,
  notificationController.update
);

router.get("/show/:id", auth(), notificationController.show);

router.get("/show-all", auth(), notificationController.showAll);

router.delete("/delete/:id", auth(), notificationController.delete);

module.exports = router;
