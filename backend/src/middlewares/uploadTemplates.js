const util = require("util");
const multer = require("multer");
const path = require("node:path");
const fs = require("fs");

const dir = "./files/templates/";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

//storage for image upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    // console.log(file.originalname);
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});

//file filter for extention
var fileFilter = function (req, file, cb) {
  // console.log(file.mimetype);
  //application/vnd.openxmlformats-officedocument.wordprocessingml.document
  //application/msword
  const allowedMimes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb("Please upload only document file.", false);
  }
};

//upload for to pass storage, file size limit and filter
//maximum file size is 1Mb
const uploadFile = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: fileFilter,
}).single("files");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
