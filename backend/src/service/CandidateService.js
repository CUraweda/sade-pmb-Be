const httpStatus = require("http-status");
const CandidatesDao = require("../dao/CandidatesDao");
const UserDao = require("../dao/UserDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");
const { userConstant } = require("../config/constant");
const EmailHelper = require("../helper/EmailPassHelper");
const PDFDocument = require("pdfkit-table");
const fs = require("fs");
const pdf = require("pdf-parse");
const ExcelJS = require("exceljs");
const config = require("../config/config");

class CandidateService {
  constructor() {
    this.candidatesDao = new CandidatesDao();
    this.userDao = new UserDao();
    this.mailHelper = new EmailHelper();
  }

  createCandidate = async (reqBody) => {
    try {
      let message = "Candidate successfully added.";

      let canData = await this.candidatesDao.create(reqBody);

      if (!canData) {
        message = "Failed to add candidate.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }
      // let id = reqBody.user_id;
      // await this.userDao.updateWhere(
      //   {
      //     reg_state: userConstant.PAYMENT_REG_STATE,
      //   },
      //   { id }
      // );

      canData = canData.toJSON();

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        canData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateCandidates = async (id, body) => {
    try {
      let message = "Candidate successfully updated.";
      let candidate = await this.candidatesDao.findById(id)
      if (!candidate) {
        return responseHandler.returnError(
          httpStatus.NOT_FOUND,
          "Candidate not found!"
        );
      }
      
      const updateData = await this.candidatesDao.updateWhere(
        {
          nisn: body.nisn,
          full_name: body.full_name,
          nick_name: body.nick_name,
          gender: body.gender,
          dob: body.dob,
          pob: body.pob,
          birth_order: body.birth_order,
          number_of_siblings: body.number_of_siblings,
          province_id: body.province_id,
          city_id: body.city_id,
          district_id: body.district_id,
          sub_district_id: body.sub_district_id,
          residence_addr: body.residence_addr,
          email: body.email,
          phone: body.phone,
          education_level: body.education_level,
          class: body.class,
          origin_pg: body.origin_pg,
          origin_kgarten: body.origin_kgarten,
          origin_elementary: body.origin_elementary,
          origin_secondary: body.origin_secondary,
          is_transfer: body.is_transfer,
          last_class: body.last_class,
          address_school: body.address_school,
          remark: body.remark,
          form_path: body.form_path,
          status_class: body.status_class,
          is_graduated: body.is_graduated,
          approved: body.approved,
        },
        { id }
      );
      
      if (!updateData[0]) {
        console.log("Service - No rows updated.");
        return responseHandler.returnError(
          httpStatus.NOT_MODIFIED,
          "No changes were made!"
        );
      }

      return responseHandler.returnSuccess(
        httpStatus.OK,
        message,
        {}
      );
    } catch (error) {
      logger.error(error);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  }

  showCandidate = async (id) => {
    const message = "Candidate successfully retrieved!";

    let candidate = await this.candidatesDao.findById(id);
    console.log(candidate);
    if (!candidate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Candidate not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, candidate);
  };

  showAllCandidatesByUserId = async (user_id) => {
    const message = "All Candidates successfully retrieved!";

    let candidates = await this.candidatesDao.getAllByUserId(user_id);

    if (!candidates) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Candidates not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, candidates);
  };

  showAll = async () => {
    const message = "Candidates successfully retrieved!";

    let candidates = await this.candidatesDao.getAll();

    if (!candidates) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Candidate not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, candidates);
  };

  deleteCandidate = async (id) => {
    const message = "Candidate successfully deleted!";

    let candidate = await this.candidatesDao.deleteByWhere({ id });

    if (!candidate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Candidate not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, candidate);
  };

  async getCandidates(page, limit, search, offset) {
    const totalRows = await this.candidatesDao.getCount(search);
    const totalPage = Math.ceil(totalRows / limit);

    const result = await this.candidatesDao.getCandidatesPage(
      search,
      offset,
      limit
    );

    return responseHandler.returnSuccess(
      httpStatus.OK,
      "Candidates data successfully retrieved.",
      {
        result: result,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage,
      }
    );
  }

  async getCandidate(id) {
    const message = "Candidate successfully retrieved!";

    let candidate = await this.candidatesDao.getOne(id);

    if (!candidate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Candidate not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, candidate);
  }

  async getCandidateExportData(id) {
    const candidate = await this.candidatesDao.getExportData(id)
    if (!candidate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Candidate not found!"
      );
    }
    return candidate
  }

  async getOneCandidate(id) {
    const message = "Candidate successfully retrieved!";

    let candidate = await this.candidatesDao.getOneCandidate(id);

    if (!candidate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Candidate not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, candidate);
  }

  async getOneSiblings(id) {
    const message = "Sibling successfully retrieved!";

    let data = await this.candidatesDao.getOneSiblings(id);

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Siblings not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  }

  async getOneParents(id) {
    const message = "Parents successfully retrieved!";

    let data = await this.candidatesDao.getOneParents(id);

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Parents not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  }

  async getOneHealth(id) {
    const message = "Health form successfully retrieved!";

    let data = await this.candidatesDao.getOneHealth(id);

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Health form not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  }

  async getOneMedicalHistory(id) {
    const message = "Medical history successfully retrieved!";

    let data = await this.candidatesDao.getOneMedicalHistory(id);

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Medical history not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  }

  async getOneSenses(id) {
    const message = "Senses successfully retrieved!";

    let data = await this.candidatesDao.getOneSenses(id);

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Senses not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  }

  async getOneRelationship(id) {
    const message = "Relationship successfully retrieved!";

    let data = await this.candidatesDao.getOneRelationship(id);

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Relationship not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  }

  async getOneQuestionnaire(id) {
    const message = "Questionnaire successfully retrieved!";

    let data = await this.candidatesDao.getOneQuestionnaire(id);

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Questionnaire not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  }

  createJSON = async (data) => {
    let { parents } = data
    if (parents) {
      const parentData = {}
      for (let parent of parents) {
        if (!parentData[parent.parent_type]) parentData[parent.parent_type] = parent
      }
      delete data.parents
      parents = parentData
    }
    const jsonData = { candidate: data, parents }
    return responseHandler.returnSuccess(
      httpStatus.OK,
      "Successfully Exported",
      jsonData
    );
  }

  createPdf = async (data, path) => {
    const id = data.candidate.id;
    // console.log(id);
    this.candidatesDao.updateWhere(
      {
        form_path: path,
      },
      { id }
    );

    let doc = new PDFDocument({ size: "A4", margin: 50 });

    this.generateHeader(doc);
    this.generateAgreement(doc, data);
    // this.generateFooter(doc, "1");
    doc.addPage();
    this.generateHeader(doc);
    this.generateData(doc, data.candidate);
    if (data.siblings.length > 0) {
      this.generateTableSiblings(doc, data);
    }
    // this.generateFooter(doc, "2");

    if (data.parents.length > 0) {
      doc.addPage();
      this.generateHeader(doc);
      this.generateTableParents(doc, data);
      // this.generateFooter(doc, "3");
    }
    if (data.healthforms.length > 0) {
      doc.addPage();
      this.generateHeader(doc);
      this.generateHealth(doc, data);
      // this.generateFooter(doc, "4");
    }
    if (data.medicalhistories.length > 0) {
      doc.addPage();
      this.generateHeader(doc);
      this.generateHistory(doc, data);
      // this.generateFooter(doc, "5");
    }
    if (data.senses.length > 0) {
      doc.addPage();
      this.generateHeader(doc);
      this.generateSenses(doc, data);
      // this.generateFooter(doc, "6");
    }
    if (data.relationships.length > 0) {
      doc.addPage();
      this.generateHeader(doc);
      this.generateRelationship(doc, data);
      // this.generateFooter(doc, "7");
    }

    if (data.questionnaires.length > 0) {
      doc.addPage();
      this.generateHeader(doc);
      this.generateQuestionnaire(doc, data);
      // this.generateFooter(doc, "7");
    }

    doc.end();
    doc.pipe(fs.createWriteStream(path));

    return responseHandler.returnSuccess(
      httpStatus.OK,
      "Successfully Exported",
      { form_path: path }
    );
  };

  generateHeader = async (doc) => {
    doc
      .image("src/images/logo.png", 50, 45, { width: 50 })
      .fillColor("#444444")
      .fontSize(20)
      .text("Sekolah Alam Depok", 110, 57)
      .fontSize(10)
      .text("Sekolah Alam Depok", 200, 50, { align: "right" })
      .text("Jalan Bungsan No. 80 Kelurahan Bedahan", 200, 65, {
        align: "right",
      })
      .text("Sawangan, Kota Depok", 200, 80, { align: "right" })
      .moveDown();
  };

  generateAgreement = async (doc, data) => {
    doc
      .fillColor("#444444")
      .font("Helvetica-Bold")
      .fontSize(12)
      .text("SURAT PERSETUJUAN", 50, 160);

    const customerInformationTop = 185;
    const leftIndent = 50;

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "Paket formulir penerimaan siswa baru Sekolah Alam Depok merupakan persyaratan yang harus diisi oleh orangtua/wali " +
        "siswa setelah menyetujui prosedur dan ketentuan penerimaan siswa baru yang telah dijelaskan. Formulir ini harus " +
        "ditandatangani dan dikembalikan ke Sekolah Alam Depok . Mohon dibaca dengan teliti.",
        leftIndent,
        customerInformationTop,
        { align: "justify", width: 500 }
      );

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text(
        "1.   Konsep Sekolah Alam",
        leftIndent,
        customerInformationTop + 55
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "Kami menyetujui konsep pendidikan Sekolah Alam Depok dan bersedia mendukung segala bentuk implementasinya.",
        leftIndent,
        customerInformationTop + 70,
        { align: "justify", width: 500 }
      );

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text(
        "2.   Persyaratan dan Penerimaan Siswa Baru",
        leftIndent,
        customerInformationTop + 110
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "Kami telah memahami serta menyetujui persyaratan dan prosedur penerimaan siswa baru Sekolah Alam Depok.",
        leftIndent,
        customerInformationTop + 125,
        { align: "justify", width: 500 }
      );

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text(
        "3.   Persyaratan dan Prosedur Keuangan",
        leftIndent,
        customerInformationTop + 145
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "Kami telah membaca dan memahami serta menyetujui persyaratan dan prosedur keuangan Sekolah Alam Depok. Apabila di kemudian " +
        "hari kami melakukan pelanggaran ketentuan/ peraturan /tata tertib yang telah ditetapkan sekolah, maka kami setuju menerima " +
        "konsekuensi sesuai dengan ketentuan yang berlaku.",
        leftIndent,
        customerInformationTop + 160,
        { align: "justify", width: 500 }
      );

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text(
        "4.   Tata tertib dan Tingkah Laku",
        leftIndent,
        customerInformationTop + 215
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "Kami memahami apabila di kemudian hari kami/putra-putri kami melakukan pelanggaran ketentuan/peraturan/ tata tertib yang telah " +
        "ditetapkan kelas maupun sekolah, maka kami bersedia menerima konsekuensi sesuai dengan ketentuan yang berlaku.",
        leftIndent,
        customerInformationTop + 230,
        { align: "justify", width: 500 }
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "Dengan ini kami menyatakan telah membaca dan memahami serta menyetujui semua persyaratan, prosedur dan tata-tertib di " +
        "Sekolah Alam Depok. Kami juga menyatakan bahwa data yang diberikan dalam formulir ini adalah informasi yang sebenar-benarnya",
        leftIndent,
        customerInformationTop + 285,
        { align: "justify", width: 500 }
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "......................................................",
        leftIndent,
        customerInformationTop + 365,
        { align: "justify", width: 500 }
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "________________________",
        leftIndent,
        customerInformationTop + 455,
        { align: "justify", width: 500 }
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text("Orang Tua / Wali", leftIndent, customerInformationTop + 470, {
        align: "justify",
        width: 500,
      });

    doc
      .fontSize(8)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "Mohon berikan paraf di bagian bawah kiri halaman",
        leftIndent,
        customerInformationTop + 550,
        {
          align: "left",
          width: 500,
        }
      );
  };

  generateData = async (doc, data) => {
    doc
      .rect(525, 115, 20, 20)
      .fillAndStroke("#FFF", "#000")
      .font("Helvetica")
      .fontSize(16)
      .fillColor("#000")
      .text("F1", 50, 120, { align: "right" });

    doc
      .fillColor("#444444")
      .font("Helvetica-Bold")
      .fontSize(12)
      .text("FORMULIR PENDAFTARAN", 50, 160);

    const customerInformationTop = 185;
    const leftIndent = 50;
    const tabIndent = 160;
    // this.generateHr(doc, 195);
    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text("A. DATA CALON SISWA", leftIndent, customerInformationTop);

    doc
      .font("Helvetica-Bold")
      .text("Data Diri", leftIndent, customerInformationTop + 15);
    this.generateHrBold(doc, 210);

    doc
      .font("Helvetica")
      .text("Nama Lengkap", leftIndent, customerInformationTop + 30)
      .text(": " + data.full_name, tabIndent, customerInformationTop + 30);
    this.generateHr(doc, customerInformationTop + 40);
    doc
      .font("Helvetica")
      .text("Nama Panggilan", leftIndent, customerInformationTop + 45)
      .text(": " + data.nick_name, tabIndent, customerInformationTop + 45);
    this.generateHr(doc, customerInformationTop + 55);
    doc
      .font("Helvetica")
      .text("Tempat/Tgl Lahir", leftIndent, customerInformationTop + 60)
      .text(
        ": " + data.pob + ", " + this.formatDate(new Date(data.dob)),
        tabIndent,
        customerInformationTop + 60
      )

      .font("Helvetica")
      .text(
        "Jenis Kelamin : " + data.gender,
        250,
        customerInformationTop + 60,
        { align: "right" }
      );
    this.generateHr(doc, customerInformationTop + 70);
    doc
      .font("Helvetica")
      .text("Urutan dalam keluarga", leftIndent, customerInformationTop + 75)
      .text(
        ": anak ke-" +
        data.birth_order +
        " dari " +
        data.number_of_siblings +
        " bersaudara",
        tabIndent,
        customerInformationTop + 75
      );
    this.generateHr(doc, customerInformationTop + 85);
    doc
      .font("Helvetica")
      .text("Alamat", leftIndent, customerInformationTop + 90)
      .text(": " + data.residence_addr, tabIndent, customerInformationTop + 90);
    this.generateHr(doc, customerInformationTop + 115);
    doc
      .font("Helvetica")
      .text("Provinsi", leftIndent, customerInformationTop + 120)
      .text(": " + data.province?.name || "", tabIndent, customerInformationTop + 120);
    this.generateHr(doc, customerInformationTop + 130);
    doc
      .font("Helvetica")
      .text("Kota/Kab", leftIndent, customerInformationTop + 135)
      .text(": " + data.city?.name || "", tabIndent, customerInformationTop + 135);
    this.generateHr(doc, customerInformationTop + 145);
    doc
      .font("Helvetica")
      .text("Kecamatan", leftIndent, customerInformationTop + 150)
      .text(": " + data.district?.name || "", tabIndent, customerInformationTop + 150);
    this.generateHr(doc, customerInformationTop + 160);
    doc
      .font("Helvetica")
      .text("Kelurahan", leftIndent, customerInformationTop + 165)
      .text(
        ": " + data.subdistrict?.name || "",
        tabIndent,
        customerInformationTop + 165
      );
    this.generateHr(doc, customerInformationTop + 175);
    doc
      .font("Helvetica-Bold")
      .text("Sekolah Asal", leftIndent, customerInformationTop + 185);
    // this.generateHr(doc, 380);
    this.generateHrBold(doc, customerInformationTop + 195);
    doc
      .font("Helvetica")
      .text("PG", leftIndent, customerInformationTop + 200)
      .text(
        data.origin_pg === null ? "-" : ": " + data.origin_pg,
        tabIndent,
        customerInformationTop + 200
      );
    this.generateHr(doc, customerInformationTop + 210);
    doc
      .font("Helvetica")
      .text("TK", leftIndent, customerInformationTop + 215)
      .text(
        data.origin_kgarten === null ? "-" : ": " + data.origin_kgarten,
        tabIndent,
        customerInformationTop + 215
      );
    this.generateHr(doc, customerInformationTop + 225);
    doc
      .font("Helvetica")
      .text("SD (Pindahan)", leftIndent, customerInformationTop + 230)
      .text(
        data.origin_elementary === null ? ": -" : data.origin_elementary,
        tabIndent,
        customerInformationTop + 230
      )

      .font("Helvetica")
      .text("Kelas", leftIndent + 350, customerInformationTop + 230)
      .text(
        data.origin_elementary === null ? ": -" : ": " + data.last_class,
        tabIndent + 275,
        customerInformationTop + 230
      );
    this.generateHr(doc, customerInformationTop + 240);
    doc
      .font("Helvetica")
      .text("SM (Pindahan)", leftIndent, customerInformationTop + 245)
      .text(
        data.origin_secondary === null ? ": -" : ": " + data.origin_secondary,
        tabIndent,
        customerInformationTop + 245
      )

      .font("Helvetica")
      .text("Kelas", leftIndent + 350, customerInformationTop + 245)
      .text(
        data.origin_secondary === null ? ": -" : ": " + data.last_class,
        tabIndent + 275,
        customerInformationTop + 245
      );
    this.generateHr(doc, customerInformationTop + 255);
    doc
      .font("Helvetica")
      .text("Alamat Sekolah", leftIndent, customerInformationTop + 260)
      .text(
        data.address_school === null ? ": -" : ": " + data.address_school,
        tabIndent,
        customerInformationTop + 260
      );
    this.generateHr(doc, customerInformationTop + 285);
    doc
      .font("Helvetica")
      .text("Alasan Masuk/Pindah", leftIndent, customerInformationTop + 290)
      .text(
        data.is_transfer === false ? ": -" : ": " + data.remark,
        tabIndent,
        customerInformationTop + 290
      );
    this.generateHr(doc, customerInformationTop + 305);
    doc
      .font("Helvetica-Bold")
      .text("Data Saudara Kandung", leftIndent, customerInformationTop + 320)
      .moveDown();
    this.generateHrBold(doc, 515);
  };

  generateTableSiblings = async (doc, data) => {
    let i;
    const dataTableTop = 530;

    doc.font("Helvetica-Bold");
    this.generateTableRowSibling(
      doc,
      dataTableTop,
      "No",
      "Nama",
      "L/P",
      "Tgl Lahir",
      "Nama Sekolah",
      "Kelas"
    );
    this.generateHr(doc, dataTableTop + 10);
    doc.font("Helvetica");

    for (i = 0; i < data.siblings.length; i++) {
      const item = data.siblings[i];
      const position = dataTableTop + (i + 1) * 20;
      this.generateTableRowSibling(
        doc,
        position,
        i + 1 + ".",
        item.name,
        item.gender.toLowerCase() === "laki-laki" ? "L" : "P",
        this.formatDate(new Date(item.dob)),
        item.school,
        item.class
      );
      // console.log(position);
      this.generateHr(doc, position + 10);
    }
  };

  generateTableParents = async (doc, data) => {
    let i;
    const dataTableTop = 160;

    doc
      .rect(525, 115, 20, 20)
      .fillAndStroke("#FFF", "#000")
      .font("Helvetica")
      .fontSize(16)
      .fillColor("#000")
      .text("F1", 50, 120, { align: "right" });

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text("B. DATA ORANG TUA/WALI", 50, dataTableTop);

    doc.font("Helvetica-Bold");
    this.generateTableRowParents(
      doc,
      dataTableTop + 20,
      "",
      "Ayah",
      "Ibu",
      "Wali"
    );
    this.generateHrBold(doc, dataTableTop + 30);
    doc.font("Helvetica");

    this.generateTableRowAttr(doc, dataTableTop + 40, "NIK");
    this.generateHr(doc, dataTableTop + 50);
    this.generateTableRowAttr(doc, dataTableTop + 55, "Nama Lengkap");
    this.generateHr(doc, dataTableTop + 65);
    this.generateTableRowAttr(doc, dataTableTop + 70, "Tempat/Tgl Lahir");
    this.generateHr(doc, dataTableTop + 80);
    this.generateTableRowAttr(doc, dataTableTop + 85, "Warga Negara");
    this.generateHr(doc, dataTableTop + 95);
    this.generateTableRowAttr(doc, dataTableTop + 100, "Agama");
    this.generateHr(doc, dataTableTop + 110);
    this.generateTableRowAttr(doc, dataTableTop + 115, "Perkawinan Ke");
    this.generateHr(doc, dataTableTop + 125);
    this.generateTableRowAttr(doc, dataTableTop + 130, "Di usia");
    this.generateHr(doc, dataTableTop + 140);
    this.generateTableRowAttr(
      doc,
      dataTableTop + 145,
      "Hubungan dengan calon siswa"
    );
    this.generateHr(doc, dataTableTop + 170);
    this.generateTableRowAttr(
      doc,
      dataTableTop + 175,
      "Alamat rumah (Jika tidak serumah dengan calon siswa)"
    );
    this.generateHr(doc, dataTableTop + 250);
    this.generateTableRowAttr(doc, dataTableTop + 255, "Telp/HP");
    this.generateHr(doc, dataTableTop + 265);
    this.generateTableRowAttr(doc, dataTableTop + 270, "Email");
    this.generateHr(doc, dataTableTop + 280);
    this.generateTableRowAttr(
      doc,
      dataTableTop + 285,
      "Sarana komunikasi yang menjadi prioritas dengan sekolah"
    );
    this.generateHr(doc, dataTableTop + 345);
    this.generateTableRowAttr(doc, dataTableTop + 350, "Pendidikan Terakhir");
    this.generateHr(doc, dataTableTop + 360);
    this.generateTableRowAttr(doc, dataTableTop + 365, "Pekerjaan");
    this.generateHr(doc, dataTableTop + 375);
    this.generateTableRowAttr(doc, dataTableTop + 380, "Penghasilan/bln");
    this.generateHr(doc, dataTableTop + 390);
    this.generateTableRowAttr(doc, dataTableTop + 395, "Bidang Pekerjaan");
    this.generateHr(doc, dataTableTop + 405);
    this.generateTableRowAttr(doc, dataTableTop + 410, "Jabatan");
    this.generateHrBold(doc, dataTableTop + 420);

    for (i = 0; i < data.parents.length; i++) {
      const item = data.parents[i];
      const position = 200;

      if (item.parent_type.toLowerCase() === "ayah") {
        this.generateTableRowAyah(doc, position, item.nik);
        this.generateTableRowAyah(doc, position + 15, item.name);
        this.generateTableRowAyah(
          doc,
          position + 30,
          item.pob + ", " + this.formatDate(new Date(item.dob))
        );
        this.generateTableRowAyah(doc, position + 45, item.citizen);
        this.generateTableRowAyah(doc, position + 60, item.religion);
        this.generateTableRowAyah(doc, position + 75, item.marriage_to);
        this.generateTableRowAyah(doc, position + 90, item.in_age);
        this.generateTableRowAyah(
          doc,
          position + 105,
          item.relationship_to_candidate
        );
        this.generateTableRowAyah(doc, position + 135, item.address);
        this.generateTableRowAyah(doc, position + 215, item.phone);
        this.generateTableRowAyah(doc, position + 230, item.email);
        this.generateTableRowAyah(doc, position + 245, item.com_priority);
        this.generateTableRowAyah(doc, position + 310, item.last_education);
        this.generateTableRowAyah(doc, position + 325, item.occupation);
        this.generateTableRowAyah(doc, position + 340, item.salary);
        this.generateTableRowAyah(
          doc,
          position + 355,
          item.field_of_work === "Lainnya"
            ? item.field_of_work_others
            : item.field_of_work
        );
        this.generateTableRowAyah(
          doc,
          position + 370,
          item.position === "Lainnya" ? item.position_others : item.position
        );
      }

      if (item.parent_type.toLowerCase() === "ibu") {
        this.generateTableRowIbu(doc, position, item.nik);
        this.generateTableRowIbu(doc, position + 15, item.name);
        this.generateTableRowIbu(
          doc,
          position + 30,
          item.pob + ", " + this.formatDate(new Date(item.dob))
        );
        this.generateTableRowIbu(doc, position + 45, item.citizen);
        this.generateTableRowIbu(doc, position + 60, item.religion);
        this.generateTableRowIbu(doc, position + 75, item.marriage_to);
        this.generateTableRowIbu(doc, position + 90, item.in_age);
        this.generateTableRowIbu(
          doc,
          position + 108,
          item.relationship_to_candidate
        );
        this.generateTableRowIbu(doc, position + 135, item.address);
        this.generateTableRowIbu(doc, position + 215, item.phone);
        this.generateTableRowIbu(doc, position + 230, item.email);
        this.generateTableRowIbu(doc, position + 245, item.com_priority);
        this.generateTableRowIbu(doc, position + 310, item.last_education);
        this.generateTableRowIbu(doc, position + 325, item.occupation);
        this.generateTableRowIbu(doc, position + 340, item.salary);
        this.generateTableRowIbu(
          doc,
          position + 355,
          item.field_of_work === "Lainnya"
            ? item.field_of_work_others
            : item.field_of_work
        );
        this.generateTableRowIbu(
          doc,
          position + 370,
          item.position === "Lainnya" ? item.position_others : item.position
        );
      }

      if (item.parent_type.toLowerCase() === "wali") {
        this.generateTableRowWali(doc, position, item.nik);
        this.generateTableRowWali(doc, position + 15, item.name);
        this.generateTableRowWali(
          doc,
          position + 30,
          item.pob + ", " + this.formatDate(new Date(item.dob))
        );
        this.generateTableRowWali(doc, position + 45, item.citizen);
        this.generateTableRowWali(doc, position + 60, item.religion);
        this.generateTableRowWali(doc, position + 75, item.marriage_to);
        this.generateTableRowWali(doc, position + 90, item.in_age);
        this.generateTableRowWali(
          doc,
          position + 108,
          item.relationship_to_candidate
        );
        this.generateTableRowWali(doc, position + 135, item.address);
        this.generateTableRowWali(doc, position + 215, item.phone);
        this.generateTableRowWali(doc, position + 230, item.email);
        this.generateTableRowWali(doc, position + 245, item.com_priority);
        this.generateTableRowWali(doc, position + 310, item.last_education);
        this.generateTableRowWali(doc, position + 325, item.occupation);
        this.generateTableRowWali(doc, position + 340, item.salary);
        this.generateTableRowWali(
          doc,
          position + 355,
          item.field_of_work === "Lainnya"
            ? item.field_of_work_others
            : item.field_of_work
        );
        this.generateTableRowWali(
          doc,
          position + 370,
          item.position === "Lainnya" ? item.position_others : item.position
        );
      }

      // this.generateHr(doc, position + 380);
    }
  };

  generateFooter = async (doc, txt) => {
    doc.fontSize(10).text(txt, 50, 780, { align: "center", width: 500 });
  };

  generateHealth = async (doc, data) => {
    doc
      .rect(526, 115, 20, 20)
      .fillAndStroke("#FFF", "#000")
      .font("Helvetica")
      .fontSize(16)
      .fillColor("#000")
      .text("F2", 50, 120, { align: "right" });

    doc
      .fillColor("#444444")
      .font("Helvetica-Bold")
      .fontSize(12)
      .text("FORMULIR KESEHATAN", 50, 160)
      .font("Helvetica")
      .fontSize(8)
      .text(
        "(formulir ini akan dibawa ke fasilitas kesehatan apabila ada kejadian darurat selama pembelajaran)",
        50,
        172
      );

    const customerInformationTop = 195;
    const leftIndent = 50;
    const tabIndent = 160;
    // this.generateHr(doc, 195);
    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text(
        "PERNYATAAN KUASA MEMBERI PERTOLONGAN PERTAMA SAAT GAWAT DARURAT/KECELAKAAN",
        leftIndent,
        customerInformationTop
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "Kami sebagai calon orang tua/wali murid " +
        data.candidate.full_name +
        " memberi kuasa kepada sekolah untuk memberikan pertolongan pertama apabila " +
        "terjadi keadaan gawat darurat atau kecelakaan pada anak kami di sekolah, yang memerlukan penanganan (perawatan) secepatnya.",
        leftIndent,
        customerInformationTop + 15,
        { align: "justify", width: 500 }
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text(
        "Depok, " + this.formatDate(new Date()),
        leftIndent,
        customerInformationTop + 70
      );

    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text("_____________________", leftIndent, customerInformationTop + 120);
    doc
      .fontSize(10)
      .font("Helvetica")
      .lineGap(5)
      .text("Orang Tua / Wali Murid", leftIndent, customerInformationTop + 135);

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text("DATA DIRI", leftIndent, customerInformationTop + 160);
    this.generateHrBold(doc, customerInformationTop + 170);

    doc
      .font("Helvetica")
      .text("Nama Lengkap", leftIndent, customerInformationTop + 180)
      .text(
        ": " + data.candidate.full_name,
        tabIndent,
        customerInformationTop + 180
      );
    this.generateHr(doc, customerInformationTop + 190);

    doc
      .font("Helvetica")
      .text("Tempat/Tgl Lahir", leftIndent, customerInformationTop + 195)
      .text(
        ": " +
        data.candidate.pob +
        ", " +
        this.formatDate(new Date(data.candidate.dob)),
        tabIndent,
        customerInformationTop + 195
      );
    this.generateHr(doc, customerInformationTop + 205);
    for (var i = 0; i < data.healthforms.length; i++) {
      const item = data.healthforms[i];
      doc
        .font("Helvetica")
        .text("Berat Badan (kg)", leftIndent, customerInformationTop + 210)
        .text(": " + item.weight, tabIndent, customerInformationTop + 210);
      this.generateHr(doc, customerInformationTop + 220);
      doc
        .font("Helvetica")
        .text("Tinggi Badan (cm)", leftIndent, customerInformationTop + 225)
        .text(": " + item.height, tabIndent, customerInformationTop + 225);
      this.generateHr(doc, customerInformationTop + 235);
      doc
        .font("Helvetica")
        .text("Alamat Rumah", leftIndent, customerInformationTop + 240)
        .text(
          ": " + data.candidate.residence_addr,
          tabIndent,
          customerInformationTop + 240
        );
      // this.generateHr(doc, customerInformationTop + 265);
      // doc
      //   .font("Helvetica")
      //   .text("Nama Orang Tua", leftIndent, customerInformationTop + 270)
      //   .text(": " + item.parent_name, tabIndent, customerInformationTop + 270);
      this.generateHr(doc, customerInformationTop + 280);
      // doc
      //   .font("Helvetica")
      //   .text("HP", leftIndent + 400, customerInformationTop + 270)
      //   .text(": " + "-", tabIndent + 310, customerInformationTop + 270);

      doc
        .font("Helvetica")
        .text("Golongan Darah", leftIndent, customerInformationTop + 285)
        .text(": " + item.blood_type, tabIndent, customerInformationTop + 285);
      this.generateHr(doc, customerInformationTop + 295);
      doc
        .font("Helvetica")
        .text("No BPJS", leftIndent, customerInformationTop + 300)
        .text(
          ": " + item.health_insurance_no,
          tabIndent,
          customerInformationTop + 300
        );
      this.generateHr(doc, customerInformationTop + 310);
    }

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text("DALAM KEADAAN DARURAT", leftIndent, customerInformationTop + 325);
    this.generateHrBold(doc, customerInformationTop + 335);

    let dataTableTop = 545;

    this.generateTableRowContacts(
      doc,
      dataTableTop,
      "",
      "Yang Harus Dihubungi Selain Orang Tua",
      "Rumah Sakit",
      "Dokter"
    );
    this.generateHrBold(doc, dataTableTop + 25);

    this.generateTableRowAttrContacts(doc, dataTableTop + 40, "Nama");
    this.generateHr(doc, dataTableTop + 50);
    this.generateTableRowAttrContacts(doc, dataTableTop + 55, "Telepon");
    this.generateHrBold(doc, dataTableTop + 65);

    for (var i = 0; i < data.healthforms.length; i++) {
      const item = data.healthforms[i];
      this.generateTableRowCon(doc, dataTableTop + 40, item.parent_name);
      this.generateTableRowCon(
        doc,
        dataTableTop + 55,
        item.emergency_contact_one
      );

      this.generateTableRowHosp(doc, dataTableTop + 40, item.hospital_one);
      this.generateTableRowHosp(doc, dataTableTop + 55, item.hospital_two);

      this.generateTableRowDr(doc, dataTableTop + 40, item.doctor_one);
      this.generateTableRowDr(doc, dataTableTop + 55, item.doctor_two);
    }
  };

  generateTableRowSibling = async (
    doc,
    y,
    no,
    sname,
    gender,
    dob,
    school,
    kls
  ) => {
    doc
      .fontSize(10)
      .text(no, 50, y, { align: "right", width: 20 })
      .text(sname, 80, y)
      .text(gender, 250, y, { align: "center", width: 20 })
      .text(dob, 280, y)
      .text(school, 340, y)
      .text(kls, 510, y);
  };

  generateTableRowParents = async (doc, y, attr, ayah, ibu, wali) => {
    doc
      .fontSize(10)
      .text(attr, 0, y)
      .text(ayah, 160, y)
      .text(ibu, 290, y)
      .text(wali, 420, y);
  };

  generateTableRowAttr = async (doc, y, attr) => {
    doc.fontSize(10).text(attr, 50, y, { align: "left", width: 90 });
  };

  generateTableRowAyah = async (doc, y, ayah) => {
    doc.fontSize(8).text(ayah, 160, y, { align: "left", width: 120 });
  };

  generateTableRowIbu = async (doc, y, ibu) => {
    doc.fontSize(8).text(ibu, 290, y, { align: "left", width: 120 });
  };

  generateTableRowWali = async (doc, y, wali) => {
    doc.fontSize(8).text(wali, 420, y, { align: "left", width: 120 });
  };

  generateTableRowContacts = async (doc, y, attr, con, hosp, dr) => {
    doc
      .fontSize(8)
      .lineGap(3)
      .text(attr, 0, y)
      .text(con, 160, y, { align: "center", width: 100 })
      .text(hosp, 290, y)
      .text(dr, 420, y);
  };

  generateTableRowAttrContacts = async (doc, y, attr) => {
    doc.fontSize(8).text(attr, 50, y, { align: "left", width: 90 });
  };

  generateTableRowCon = async (doc, y, con) => {
    doc.font("Helvetica").fontSize(8).text(con, 160, y);
  };

  generateTableRowHosp = async (doc, y, hosp) => {
    doc.font("Helvetica").fontSize(8).text(hosp, 290, y);
  };

  generateTableRowDr = async (doc, y, dr) => {
    doc.font("Helvetica").fontSize(8).text(dr, 420, y);
  };

  generateHistory = async (doc, data) => {
    const customerInformationTop = 160;
    const leftIndent = 50;

    doc
      .rect(526, 115, 20, 20)
      .fillAndStroke("#FFF", "#000")
      .font("Helvetica")
      .fontSize(16)
      .fillColor("#000")
      .text("F2", 50, 120, { align: "right" });

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text("RIWAYAT KESEHATAN", leftIndent, customerInformationTop);
    this.generateHrBold(doc, customerInformationTop + 10);

    this.generateTableHistoy(doc, data);
  };

  generateTableHistoy = async (doc, data) => {
    let i;
    let rowsData = [];
    let descData;

    for (i = 0; i < data.medicalhistories.length; i++) {
      const item = data.medicalhistories[i];

      let desc = JSON.parse(item.description);
      descData = "";
      for (var key in desc) {
        if (desc.hasOwnProperty(key)) {
          var value = key.replaceAll("_", " ") + ": " + desc[key];
          //do something with value;
          descData += value + "\n";
        }
        // console.log(key);
      }
      // console.log(i + ". " + descData);

      rowsData.push([i + 1, item.question, item.answer, descData]);
    }

    const dataTable = {
      headers: [
        {
          label: "",
          property: "a",
          width: 30,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "b",
          width: 150,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "c",
          width: 50,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "d",
          width: 270,
          renderer: null,
          headerColor: "#FFFFFF",
        },
      ],
      rows: rowsData,
    };
    doc.table(dataTable, {
      columnSpacing: 5,
      padding: 5,
      columnsSize: [30, 170, 50, 270],
      align: "center",
      prepareHeader: () => doc.fontSize(10).font("Helvetica-Bold"), // {Function}
      // -----------------------------------------------------------------
      // HERE THE MAGIC:
      // -----------------------------------------------------------------
      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
        const { x, y, width, height } = rectCell;
        // first line
        if (indexColumn === 0) {
          doc
            .lineWidth(0.5)
            .moveTo(x, y)
            .lineTo(x, y + height)
            .stroke();
        }
        doc
          .lineWidth(0.5)
          .moveTo(x + width, y)
          .lineTo(x + width, y + height)
          .stroke();
        doc.fontSize(10).fillColor("#292929").font("Helvetica");
      }, // {Function}
    });

    // let i;
    // const dataTableTop = 170;

    // // this.generateHr(doc, dataTableTop + 10);
    // doc.font("Helvetica");
    // let position = 0;
    // for (i = 0; i < data.medicalhistories.length; i++) {
    //   const item = data.medicalhistories[i];

    //   if (i === 0) position = dataTableTop + 20;
    //   else position = position + 65;
    //   let descData = JSON.parse(item.description);

    //   this.generateTableRowHistory(
    //     doc,
    //     position,
    //     i + 1 + ".",
    //     item.question,
    //     item.answer,
    //     descData
    //   );

    //   this.generateHr(doc, position + 60);

    //   if (position > 680) {
    //     doc.addPage();
    //     this.generateHeader(doc);
    //     doc
    //       .rect(526, 115, 20, 20)
    //       .fillAndStroke("#FFF", "#000")
    //       .font("Helvetica")
    //       .fontSize(16)
    //       .fillColor("#000")
    //       .text("F2", 50, 120, { align: "right" });
    //     // this.generateFooter(doc, "8");

    //     position = 100;
    //   }
    // }
  };

  generateTableRowHistory = async (doc, y, no, question, answer, desc) => {
    var n = y;
    doc
      .fontSize(10)
      .text(no, 50, y, { align: "right", width: 20 })
      .text(question, 80, y, { align: "left", width: 180 })
      .text(answer, 270, y);
    for (var key in desc) {
      if (desc.hasOwnProperty(key)) {
        var value = key.replaceAll("_", " ") + ": " + desc[key];
        //do something with value;
        doc.text(value, 320, n, { align: "left", width: 200 });
        n = n + 15;
      }
    }
  };

  generateSenses = async (doc, data) => {
    const customerInformationTop = 160;
    const leftIndent = 50;

    doc
      .rect(526, 115, 20, 20)
      .fillAndStroke("#FFF", "#000")
      .font("Helvetica")
      .fontSize(16)
      .fillColor("#000")
      .text("F2", 50, 120, { align: "right" });

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text("KEADAAN INDERA (Opsional)", leftIndent, customerInformationTop);
    this.generateHrBold(doc, customerInformationTop + 10);

    this.generateTableSenses(doc, data);
  };

  generateTableSenses = async (doc, data) => {
    let i;
    let rowsData = [];
    let abilityData;
    let descData;

    for (i = 0; i < data.senses.length; i++) {
      const item = data.senses[i];

      let ability = JSON.parse(item.ability);
      let desc = JSON.parse(item.description);

      for (var key in ability) {
        if (ability.hasOwnProperty(key)) {
          var value = key + ": " + ability[key];
          //do something with value;
          if (ability[key] === true) abilityData = key;
        }
      }
      // doc.text(ability, 220, y, { align: "left", width: 150 });
      for (var key in desc) {
        if (desc.hasOwnProperty(key)) {
          var value = key.replaceAll("_", " ") + ": " + desc[key];
          //do something with value;
          descData = value;
        }
      }

      rowsData.push([
        i + 1,
        item.criteria,
        abilityData === null ? "" : abilityData,
        descData === null ? "" : descData,
      ]);
    }

    const dataTable = {
      headers: [
        {
          label: "",
          property: "a",
          width: 30,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "b",
          width: 150,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "c",
          width: 50,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "d",
          width: 270,
          renderer: null,
          headerColor: "#FFFFFF",
        },
      ],
      rows: rowsData,
    };
    doc.table(dataTable, {
      columnSpacing: 5,
      padding: 5,
      columnsSize: [30, 170, 50, 270],
      align: "center",
      prepareHeader: () => doc.fontSize(10).font("Helvetica-Bold"), // {Function}
      // -----------------------------------------------------------------
      // HERE THE MAGIC:
      // -----------------------------------------------------------------
      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
        const { x, y, width, height } = rectCell;
        // first line
        if (indexColumn === 0) {
          doc
            .lineWidth(0.5)
            .moveTo(x, y)
            .lineTo(x, y + height)
            .stroke();
        }
        doc
          .lineWidth(0.5)
          .moveTo(x + width, y)
          .lineTo(x + width, y + height)
          .stroke();
        doc.fontSize(10).fillColor("#292929").font("Helvetica");
      }, // {Function}
    });

    //--------------Table standar tidak bisa dinamis ----------------
    // let i;
    // const dataTableTop = 170;

    // // this.generateHr(doc, dataTableTop + 10);
    // doc.font("Helvetica");
    // let position = 0;
    // for (i = 0; i < data.senses.length; i++) {
    //   const item = data.senses[i];

    //   if (i === 0) position = dataTableTop + 20;
    //   else position = position + 65;
    //   let abilityData = JSON.parse(item.ability);
    //   let descData = JSON.parse(item.description);

    //   this.generateTableRowSenses(
    //     doc,
    //     position,
    //     i + 1 + ".",
    //     item.criteria,
    //     abilityData,
    //     descData
    //   );

    //   this.generateHr(doc, position + 60);

    //   if (position > 680) {
    //     doc.addPage();
    //     this.generateHeader(doc);
    //     doc
    //       .rect(526, 115, 20, 20)
    //       .fillAndStroke("#FFF", "#000")
    //       .font("Helvetica")
    //       .fontSize(16)
    //       .fillColor("#000")
    //       .text("F2", 50, 120, { align: "right" });
    //     // this.generateFooter(doc, "8");

    //     position = 100;
    //   }
    // }
  };

  generateTableRowSenses = async (doc, y, no, criteria, ability, desc) => {
    var n = y;
    var m = y;
    doc
      .fontSize(10)
      .text(no, 50, y, { align: "right", width: 20 })
      .text(criteria, 80, y, { align: "left", width: 180 });
    for (var key in ability) {
      if (ability.hasOwnProperty(key)) {
        var value = key + ": " + ability[key];
        //do something with value;
        if (ability[key] === true)
          doc.text(key, 220, n, { align: "left", width: 150 });
        n = n + 15;
      }
    }
    // doc.text(ability, 220, y, { align: "left", width: 150 });
    for (var key in desc) {
      if (desc.hasOwnProperty(key)) {
        var value = key.replaceAll("_", " ") + ": " + desc[key];
        //do something with value;
        doc.text(value, 330, m, { align: "left", width: 200 });
        m = m + 15;
      }
    }
  };

  generateRelationship = async (doc, data) => {
    const customerInformationTop = 160;
    const leftIndent = 50;

    doc
      .rect(526, 115, 20, 20)
      .fillAndStroke("#FFF", "#000")
      .font("Helvetica")
      .fontSize(16)
      .fillColor("#000")
      .text("F3", 50, 120, { align: "right" });

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text("HUBUNGAN KELUARGA", leftIndent, customerInformationTop);
    this.generateHrBold(doc, customerInformationTop + 10);

    this.generateTableRelationship(doc, data);
  };

  generateTableRelationship = async (doc, data) => {
    let rowsData = [];
    let i;
    let str;

    for (i = 0; i < data.relationships.length; i++) {
      const item = data.relationships[i];
      if (item.answers) {
        if (item.answers.includes("{")) {
          const jsonStr = JSON.parse(item.answers);
          for (var key in jsonStr) {
            if (jsonStr.hasOwnProperty(key)) {
              const jwb = jsonStr[key].toString() === "true" ? "[x]" : "[  ]";
              var value = jwb + " " + key;
              str += value + "\n";
            }
          }
          rowsData.push([
            i + 1,
            item.questions,
            item.answers === null ? "" : value,
          ]);
        } else {
          str = item.answers.replace(/^"(.*)"$/, "$1");
          rowsData.push([
            i + 1,
            item.questions,
            item.answers === null ? "" : str,
          ]);
        }
      }
    }

    const dataTable = {
      headers: [
        {
          label: "",
          property: "a",
          width: 30,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "b",
          width: 235,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "c",
          width: 235,
          renderer: null,
          headerColor: "#FFFFFF",
        },
      ],
      rows: rowsData,
    };
    doc.table(dataTable, {
      columnSpacing: 5,
      padding: 5,
      columnsSize: [30, 230, 230],
      align: "center",
      prepareHeader: () => doc.fontSize(10).font("Helvetica-Bold"), // {Function}
      // -----------------------------------------------------------------
      // HERE THE MAGIC:
      // -----------------------------------------------------------------
      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
        const { x, y, width, height } = rectCell;
        // first line
        if (indexColumn === 0) {
          doc
            .lineWidth(0.5)
            .moveTo(x, y)
            .lineTo(x, y + height)
            .stroke();
        }
        doc
          .lineWidth(0.5)
          .moveTo(x + width, y)
          .lineTo(x + width, y + height)
          .stroke();
        doc.fontSize(10).fillColor("#292929").font("Helvetica");
      }, // {Function}
    });

    // -------Standar setup tabel tidak bisa dinamis----
    // let i;
    // const dataTableTop = 170;

    // // this.generateHr(doc, dataTableTop + 10);
    // doc.font("Helvetica");
    // let position = 0;
    // for (i = 0; i < data.relationships.length; i++) {
    //   const item = data.relationships[i];

    //   if (i === 0) position = dataTableTop + 20;
    //   else position = position + 65;
    //   // let descAnswer = JSON.parse(item.answers);

    //   this.generateTableRowRelationship(
    //     doc,
    //     position,
    //     item.questions,
    //     ":",
    //     item.answers
    //   );

    //   this.generateHr(doc, position + 60);

    //   if (position > 680) {
    //     doc.addPage();
    //     this.generateHeader(doc);
    //     doc
    //       .rect(526, 115, 20, 20)
    //       .fillAndStroke("#FFF", "#000")
    //       .font("Helvetica")
    //       .fontSize(16)
    //       .fillColor("#000")
    //       .text("F3", 50, 120, { align: "right" });
    //     // this.generateFooter(doc, "8");

    //     position = 100;
    //   }

    //   // this.generateHr(doc, position + 10);
    // }
  };

  generateTableRowRelationship = async (doc, y, no, question, answer) => {
    var m = y;

    doc
      .fontSize(10)
      .text(no, 50, y, { align: "left", width: 240 })
      .text(question, 300, y, { align: "center", width: 20 });
    if (answer.includes("{")) {
      const jsonStr = JSON.parse(answer);
      for (var key in jsonStr) {
        if (jsonStr.hasOwnProperty(key)) {
          const jwb = jsonStr[key].toString() === "true" ? "[x]" : "[  ]";
          var value = jwb + " " + key;
          //do something with value;

          doc.text(value, 320, m, { align: "left", width: 220 });
          m = m + 15;
        }
      }
    } else {
      doc.text(answer.replace(/^"(.*)"$/, "$1"), 320, m, {
        align: "left",
        width: 200,
      });
    }
  };

  generateQuestionnaire = async (doc, data) => {
    doc
      .rect(525, 115, 20, 20)
      .fillAndStroke("#FFF", "#000")
      .font("Helvetica")
      .fontSize(16)
      .fillColor("#000")
      .text("F4", 50, 120, { align: "right" });

    doc
      .fillColor("#444444")
      .font("Helvetica-Bold")
      .fontSize(12)
      .text("TENTANG SADE", 50, 160);

    const customerInformationTop = 185;
    const leftIndent = 50;
    // this.generateHr(doc, 195);
    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text("MEMILIH SADE", leftIndent, customerInformationTop);

    this.generateHrBold(doc, customerInformationTop + 10);

    // this.generateHr(doc, customerInformationTop + 10);

    this.generateTableQuestionnaire(doc, data);
  };

  generateTableQuestionnaire = async (doc, data) => {
    let rowsData = [];
    let str = "";
    for (var i = 0; i < data.questionnaires.length; i++) {
      const item = data.questionnaires[i];
      if (item.answers) {
        if (item.answers.includes("{")) {
          // console.log(answer);
          str = "";
          const jsonStr = JSON.parse(item.answers);
          for (var key in jsonStr) {
            // console.log(key);
            if (jsonStr.hasOwnProperty(key)) {
              var value = key + " : " + jsonStr[key];
              str += value.replaceAll("_", " ") + "\n";
            }
          }
          rowsData.push([
            i + 1,
            item.questions,
            item.answers === null ? "" : str,
          ]);
        } else if (item.answers.includes("[")) {
          str = item.answers.replace(/[\[\]"]/g, "");
          rowsData.push([
            i + 1,
            item.questions,
            item.answers === null ? "" : str,
          ]);
        } else {
          str = item.answers.replace(/^"(.*)"$/, "$1");
          rowsData.push([
            i + 1,
            item.questions,
            item.answers === null ? "" : str,
          ]);
        }
      }
      // rowsData.push([i + 1, item.questions, item.answers === null ? "" : str]);
    }
    // console.log(rowsData);
    const dataTable = {
      headers: [
        {
          label: "",
          property: "a",
          width: 30,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "b",
          width: 225,
          renderer: null,
          headerColor: "#FFFFFF",
        },
        {
          label: "",
          property: "c",
          width: 225,
          renderer: null,
          headerColor: "#FFFFFF",
        },
      ],
      rows: rowsData,
    };
    doc.table(dataTable, {
      columnSpacing: 5,
      padding: 5,
      columnsSize: [30, 220, 220],
      align: "center",
      prepareHeader: () => doc.fontSize(10).font("Helvetica-Bold"), // {Function}
      // -----------------------------------------------------------------
      // HERE THE MAGIC:
      // -----------------------------------------------------------------
      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
        const { x, y, width, height } = rectCell;
        // first line
        if (indexColumn === 0) {
          doc
            .lineWidth(0.5)
            .moveTo(x, y)
            .lineTo(x, y + height)
            .stroke();
        }
        doc
          .lineWidth(0.5)
          .moveTo(x + width, y)
          .lineTo(x + width, y + height)
          .stroke();
        doc.fontSize(10).fillColor("#292929").font("Helvetica");
      }, // {Function}
    });
    //---------------------------
    // done
    // doc.end();
    //-----------------------
    //Standar setup tabel tidak dinamis
    // let i;
    // const dataTableTop = 185;
    // // this.generateHr(doc, dataTableTop + 10);
    // doc.font("Helvetica");
    // let position = 0;
    // for (i = 0; i < data.questionnaires.length; i++) {
    //   const item = data.questionnaires[i];
    //   if (i === 0) position = dataTableTop + 20;
    //   else if (i === 8) position = position + 65 * 2;
    //   else position = position + 65;
    //   // let descAnswer = JSON.parse(item.answers);
    //   if (position > 680) {
    //     doc.addPage();
    //     this.generateHeader(doc);
    //     doc
    //       .rect(526, 115, 20, 20)
    //       .fillAndStroke("#FFF", "#000")
    //       .font("Helvetica")
    //       .fontSize(16)
    //       .fillColor("#000")
    //       .text("F4", 50, 120, { align: "right" });
    //     // this.generateFooter(doc, "8");
    //     position = 160;
    //   }
    //   this.generateTableRowQuestionnaire(
    //     doc,
    //     position,
    //     item.questions,
    //     ":",
    //     item.answers
    //   );
    //   // console.log(position + ", " + item.questions);
    //   if (i === 7) this.generateHr(doc, position + 60 * 2);
    //   else this.generateHr(doc, position + 60);
    // }
  };

  generateTableRowQuestionnaire = async (doc, y, no, question, answer) => {
    // console.log(answer);
    var m = y;
    doc
      .fontSize(10)
      .text(no, 50, y, { align: "left", width: 250 })
      .text(question, 330, y, { align: "center", width: 20 });
    if (answer !== null) {
      if (answer.includes("{")) {
        // console.log(answer);
        const jsonStr = JSON.parse(answer);
        for (var key in jsonStr) {
          // console.log(key);
          if (jsonStr.hasOwnProperty(key)) {
            var value = key + " : " + jsonStr[key];
            //do something with value;
            // console.log(value);
            doc.text(value.replaceAll("_", " "), 350, m, {
              align: "left",
              width: 220,
            });
            m = m + 15;
          }
        }
      } else if (answer.includes("[")) {
        doc.text(answer.replace(/[\[\]"]/g, ""), 350, m, {
          align: "left",
          width: 200,
        });
        m = m + 15;
      } else {
        doc.text(answer.replace(/^"(.*)"$/, "$1"), 350, m, {
          align: "left",
          width: 200,
        });
      }
    } else {
      doc.text("-", 350, m, {
        align: "left",
        width: 200,
      });
      m = m + 15;
    }
    // doc.text(answer, 350, y, { align: "left", width: 200 });
  };

  generateHr = async (doc, y) => {
    doc
      .strokeColor("#aaaaaa")
      .lineWidth(1)
      .moveTo(50, y)
      .lineTo(550, y)
      .stroke();
  };

  generateHrBold = async (doc, y) => {
    doc
      .strokeColor("#000000")
      .lineWidth(1.5)
      .moveTo(50, y)
      .lineTo(550, y)
      .stroke();
  };

  formatCurrency = (cents) => {
    return "Rp." + cents.toFixed(2);
  };

  thousandSaparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return day + "/" + month + "/" + year;
  };

  createExcel = async (data, path) => {
    const id = data.id;

    // console.log(id);
    // this.candidatesDao.updateWhere(
    //   {
    //     excel_path: path,
    //   },
    //   { id }
    // );

    this.pdfToExcel(data.form_path, path);

    return responseHandler.returnSuccess(
      httpStatus.OK,
      "Successfully Exported",
      {}
    );
  };

  pdfToExcel = async (inputPDFPath, outputExcelPath) => {
    try {
      // Read the PDF file
      const dataBuffer = fs.readFileSync(inputPDFPath);

      // Parse the PDF content
      const pdfData = await pdf(dataBuffer);

      // Create a new Excel workbook
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet 1");

      // Split the PDF text by lines
      const pdfTextLines = pdfData.text.split("\n");

      // Parse PDF content and write it to the Excel sheet
      pdfTextLines.forEach((line, rowIndex) => {
        const columns = line.split("\t"); // You may need to adjust the delimiter

        columns.forEach((value, columnIndex) => {
          worksheet.getCell(rowIndex + 1, columnIndex + 1).value = value;
        });
      });

      // Save the Excel workbook to a file
      await workbook.xlsx.writeFile(outputExcelPath);
      console.log("PDF to Excel conversion complete.");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  updateCandidateResult = async (id, body) => {
    const message = "Candidate successfully updated!";

    let candidate = await this.candidatesDao.findById(id);

    if (!candidate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Candidate not found!"
      );
    }

    const updateData = await this.candidatesDao.updateWhere(
      {
        is_graduated: body.is_graduated,
      },
      { id }
    );

    var email =
      body.email === undefined ? candidate.dataValues.email : body.email;

    if (body.is_graduated === true) {
      // Add Nodemailer
      this.mailHelper.sendEmail(
        candidate.dataValues.full_name,
        config.email.account,
        email,
        "Hasil Seleksi Penerimaan Siswa Baru"
      );
    }

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  updateCandidate = async (ids, body) => {
    const message = "Candidate successfully updated!";

    let candidate = await this.candidatesDao.findById(ids);

    if (!candidate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Candidate not found!"
      );
    }

    const updateData = await this.candidatesDao.setExpotedArr(ids);

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };
}
module.exports = CandidateService;
