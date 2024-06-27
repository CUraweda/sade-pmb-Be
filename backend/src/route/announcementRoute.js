const express = require("express");
const AnnouncementController = require("../controllers/AnnouncementController");
const AnnouncementValidator = require("../validator/AnnouncementValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const announcementController = new AnnouncementController();
const announcementValidator = new AnnouncementValidator();

router.post(
  "/create",
  auth(),
  announcementValidator.announcementCreateUpdateValidator,
  announcementController.create
);

router.put(
  "/update/:id",
  auth(),
  // announcementValidator.announcementCreateUpdateValidator,
  announcementController.update
);

router.put("/upload/:id", auth(), announcementController.upload);

router.put("/upload-two/:id", auth(), announcementController.uploadTwo);

router.put("/upload-result/:id", auth(), announcementController.uploadR);

router.get("/show/:id", auth(), announcementController.show);

router.get(
  "/show-all/:id",
  auth(),
  announcementController.showAllByCandidateId
);

router.get("/show-all", auth(), announcementController.showAll);

router.delete("/delete/:id", auth(), announcementController.delete);

router.post("/file-buff", auth(), announcementController.fileBuff);

router.get("/download-form/:id", auth(), announcementController.fileDownload);

router.get(
  "/download-result/:id",
  auth(),
  announcementController.fileDownloadR
);

module.exports = router;
