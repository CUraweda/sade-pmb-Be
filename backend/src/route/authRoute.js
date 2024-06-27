const express = require("express");
const AuthController = require("../controllers/AuthController");
const UserValidator = require("../validator/UserValidator");
// const multer = require("multer");

const router = express.Router();
const auth = require("../middlewares/auth");
// const uploadFile = require("../middlewares/uploadFile");

const authController = new AuthController();
const userValidator = new UserValidator();

// const upload = multer({ dest: "files/" });

router.post(
  "/register",
  userValidator.userCreateValidator,
  authController.register
);
router.post(
  "/email-exists",
  userValidator.checkEmailValidator,
  authController.checkEmail
);
router.post("/login", userValidator.userLoginValidator, authController.login);
router.post("/refresh-token", authController.refreshTokens);
router.post("/logout", authController.logout);
router.put(
  "/change-password",
  auth(),
  userValidator.changePasswordValidator,
  authController.changePassword
);
router.post("/validate-email/:id", authController.verifyMail);
router.put("/update-profile/:id", auth(), authController.upload);

router.put("/update-status/:id", auth(), authController.updateStatus);

router.put("/update-state/:id", auth(), authController.updateState);
router.put("/update-active/:id", auth(), authController.updateActiveState);
router.get("/show-all", auth(), authController.showAll);
router.post("/forgot-password", authController.forgotPassword);
router.post(
  "/reset-password",
  userValidator.resetPasswordValidator,
  authController.resetPassword
);

module.exports = router;
