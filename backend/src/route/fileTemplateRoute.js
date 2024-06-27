const express = require("express");
const FileTemplateController = require("../controllers/FileTemplateController");
const FileTemplateValidator = require("../validator/FileTemplateValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const fileTemplateController = new FileTemplateController();
const fileTemplateValidator = new FileTemplateValidator();

router.post(
  "/create",
  auth(),
  fileTemplateValidator.fileTemplateCreateUpdateValidator,
  fileTemplateController.create
);

// router.put(
//   "/update/:id",
//   auth(),
//   fileTemplateValidator.fileTemplateCreateUpdateValidator,
//   fileTemplateController.update
// );

router.get("/show/:id", auth(), fileTemplateController.show);

router.get(
  "/show-by-candidate/:id",
  auth(),
  fileTemplateController.showByCandidateId
);

router.get("/show-all", auth(), fileTemplateController.showAll);

router.delete("/delete/:id", auth(), fileTemplateController.delete);

router.post("/file-buff", auth(), fileTemplateController.fileBuff);

router.get("/download/:id", auth(), fileTemplateController.fileDownload);

module.exports = router;
