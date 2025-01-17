const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const TokenService = require("../service/TokenService");
const UserService = require("../service/UserService");
const CandidateService = require("../service/CandidateService");
const logger = require("../config/logger");
const { tokenTypes } = require("../config/tokens");

// const data = require("../../files/sample/candidates.json");
const dir = "./files/export/pdf";
const dir_ex = "./files/export/excel";
const dir_json = "./files/export/json"
const fs = require("fs");

class CandidatesController {
  constructor() {
    this.userService = new UserService();
    this.tokenService = new TokenService();
    this.authService = new AuthService();
    this.candidateService = new CandidateService();
  }

  create = async (req, res) => {
    try {
      const responseData = await this.candidateService.createCandidate(
        req.body
      );

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  createBulk = async (req, res) => {
    try {
      const data = req.body.data;

      for (const key in data) {
        this.candidateService.createCandidate(data[key]);
      }

      res.status(httpStatus.CREATED).send({
        status: true,
        code: httpStatus.CREATED,
        message: "Candidates successfully added.",
        data,
      });
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  update = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.candidateService.updateCandidates(
        id,
        req.body
      );

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  show = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.candidateService.showCandidate(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAllByUserId = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData =
        await this.candidateService.showAllCandidatesByUserId(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAll = async (req, res) => {
    try {
      const responseData = await this.candidateService.showAll();

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  delete = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.candidateService.deleteCandidate(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  getAll = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 10;
      const search = req.query.search_query || "";
      const offset = limit * page;
      const responseData = await this.candidateService.getCandidates(
        page,
        limit,
        search,
        offset
      );

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showOne = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.candidateService.getCandidate(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  exportPdf = async (req, res) => {
    try {
      var id = req.params.id;
      const rndDate = Date.now();
      const path_pdf = dir + "/" + rndDate + "_candidate.pdf";
      const path_excel = dir_ex + "/" + rndDate + "_candidate.xlsx";

      const candidateData = await this.candidateService.getOneCandidate(id);
      const siblingData = await this.candidateService.getOneSiblings(id);
      const parentData = await this.candidateService.getOneParents(id);
      const healthData = await this.candidateService.getOneHealth(id);
      const medicalHistoryData = await this.candidateService.getOneMedicalHistory(id);
      const sensesData = await this.candidateService.getOneSenses(id);
      const relationshipData = await this.candidateService.getOneRelationship(
        id
      );
      const questionnaireData = await this.candidateService.getOneQuestionnaire(
        id
      );

      if (candidateData.response.data.length === 0) {
        res.status(httpStatus.BAD_GATEWAY).send({
          status: true,
          code: httpStatus.BAD_GATEWAY,
          message: "Candidate data not found.",
        });
      } else {
        var candidate = candidateData.response.data[0];

        var jsonData = {
          candidate: candidate,
          siblings: siblingData.response.data,
          parents: parentData.response.data,
          healthforms: healthData.response.data,
          medicalhistories: medicalHistoryData.response.data,
          senses: sensesData.response.data,
          relationships: relationshipData.response.data,
          questionnaires: questionnaireData.response.data,
        };

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        const responseData = await this.candidateService.createPdf(
          jsonData,
          path_pdf
        );

        if (!fs.existsSync(dir_ex)) {
          fs.mkdirSync(dir_ex, { recursive: true });
        }

        // await this.candidateService.createExcel(jsonData, path_excel);

        res.status(responseData.statusCode).send(responseData.response);
        // res.status(httpStatus.OK).send(jsonData);
      }
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  exportJSON = async (req, res) => {
    try {
      const { id } = req.params
      const data = await this.candidateService.getCandidateExportData(id)      
      const responseData = await this.candidateService.createJSON(data)
      
      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);

    }
  }

  exportExcel = async (req, res) => {
    try {
      var id = req.params.id;
      const path_excel = dir_ex + "/" + Date.now() + "_candidate.xlsx";

      console.log(path_excel)
      let candidateData = await this.candidateService.getCandidate(id);

      if (candidateData.response.data.length === 0) {
        res.status(httpStatus.BAD_GATEWAY).send({
          status: true,
          code: httpStatus.BAD_GATEWAY,
          message: "Candidate data not found.",
        });
      } else {
        var jsonData = candidateData.response.data[0];

        // console.log(candidateData.response.data.length);

        if (!fs.existsSync(dir_ex)) {
          fs.mkdirSync(dir_ex, { recursive: true });
        }

        const responseData = await this.candidateService.createExcel(
          jsonData,
          path_excel
        );

        res.status(responseData.statusCode).send(responseData.response);
      }
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  fileBuff = async (req, res) => {
    try {
      const filePath = req.body.path;

      console.log(filePath);

      var buffer = fs.readFileSync(filePath, { encoding: "base64" });
      // var bufferBase64 = new Buffer(buffer);
      res.status(200).send(buffer);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  fileDownload = async (req, res) => {
    try {
      const id = req.params.id;

      let candidateData = await this.candidateService.showCandidate(id);

      console.log(candidateData);

      if (candidateData.statusCode === httpStatus.NOT_FOUND) {
        res.status(httpStatus.OK).send({
          status: true,
          code: httpStatus.OK,
          message: "Candidate data not found.",
        });
      } else {
        var resPath = candidateData.response.data.form_path;

        // console.log(candidateData.response.data.form_path);

        res.download(resPath, function (err) {
          console.log(err);
        });
      }
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  updateStatusClass = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.candidateService.updateCandidate(
        id,
        req.body
      );

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  updateGraduated = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.candidateService.updateCandidateResult(
        id,
        req.body
      );

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = CandidatesController;
