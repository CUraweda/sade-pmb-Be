const express = require("express");
const GlobalAttachmentController = require("../controllers/GlobalAttachmentController");
// const GlobalAttachmentValidator = require("../validator/GlobalAttachmentValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const globalAttachmentController = new GlobalAttachmentController();
// const globalAttachmentValidator = new GlobalAttachmentValidator();

router.post(
  "/create",
  auth(),
  // globalAttachmentValidator.globalAttachmentCreateUpdateValidator,
  globalAttachmentController.create
);

router.put(
  "/update/:id",
  auth(),
  // globalAttachmentValidator.globalAttachmentCreateUpdateValidator,
  globalAttachmentController.update
);

router.get("/show/:id", auth(), globalAttachmentController.show);

router.get("/show-all/:id", auth(), globalAttachmentController.showAllByUserId);

router.delete("/delete/:id", auth(), globalAttachmentController.delete);

router.post("/file-buff", auth(), globalAttachmentController.fileBuff);

router.post("/file-download", auth(), globalAttachmentController.fileDownload);

module.exports = router;
