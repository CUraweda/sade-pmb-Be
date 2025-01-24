const express = require("express");
const CandidatesController = require("../controllers/CandidatesController");
const CandidateValidator = require("../validator/CandidateValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const candidatesController = new CandidatesController();
const candidateValidator = new CandidateValidator();

router.post(
  "/create",
  auth(),
  candidateValidator.candidateCreateUpdateValidator,
  candidatesController.create
);

router.post(
  "/create-bulk",
  auth(),
  // candidateValidator.candidateCreateUpdateValidator,
  candidatesController.createBulk
);

router.put(
  "/update/:id",
  auth(),
  candidateValidator.candidateCreateUpdateValidator,
  candidatesController.update
);

router.get("/", auth(), candidatesController.getAll);

// router.get("/:id", auth(), candidatesController.showOne);

router.post("/export-pdf/:id", auth(), candidatesController.exportPdf);

router.post("/export-excel/:id", auth(), candidatesController.exportExcel);

router.get('/export-json/:id', auth(), candidatesController.exportJSON)

router.get("/show/:id", auth(), candidatesController.show);

router.get("/show-all/:id", auth(), candidatesController.showAllByUserId);

router.get("/show-recap-level", auth(), candidatesController.showRecapLevel);

router.get("/show-all", auth(), candidatesController.showAll);

router.delete("/delete/:id", auth(), candidatesController.delete);

router.post("/file-buff", auth(), candidatesController.fileBuff);

router.get("/file-download/:id", auth(), candidatesController.fileDownload);

router.put("/status-class/:id", auth(), candidatesController.update);

router.put(
  "/status-graduate/:id",
  auth(),
  candidatesController.updateGraduated
);

module.exports = router;
