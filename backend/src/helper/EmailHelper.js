/* eslint-disable class-methods-use-this */

const formData = require("form-data");
// const Mailgun = require('mailgun.js');
const config = require("../config/config");
const logger = require("../config/logger");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  //? Gmail Method
  service: "gmail",
  auth: {
    user: config.email.account,
    pass: config.email.password,
  },


  //?SMPT Method
  // host: config.email.host,
  // port: config.email.port,
  // secure: true,
  // auth: {
  //   // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  //   user: config.email.account,
  //   pass: config.email.password,
  // },
});

var readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

class EmailHelper {
  async sendEmail(
    uuid,
    from,
    to,
    subject,
    body,
    auth = null,
    attachment = false
  ) {
    try {
      readHTMLFile("./src/mail.html", function (err, html) {
        if (err) {
          console.log("error reading file", err);
          return;
        }
        var template = handlebars.compile(html);
        var replacements = {
          url: "https://pendaftaran.sekolahalamdepok.sch.id/verifikasi/" + uuid,
        };
        var htmlToSend = template(replacements);
        var mailOptions = {
          from: from,
          to: to,
          subject: subject,
          html: htmlToSend,
        };
        transporter.sendMail(mailOptions, function (error, response) {
          if (error) {
            console.log(error);
          }
        });
      });
      // const info = await transporter.sendMail({
      //   from: from, // sender address
      //   to: to, // list of receivers
      //   subject: subject, // Subject line
      //   text: body, // plain text body
      //   html:
      //     "<b>Konfirmasi Alamat Email Anda</b>" +
      //     "<p>Silakan klik tombol dibawah ini</p>" +
      //     "<button>Konfirmasi</button>" +
      //     "<p>Atau klik tautan " +
      //     config.baseUrl +
      //     "api/auth/validate-email/" +
      //     uuid +
      //     "</p>", // html body
      // });
      // const apiKey = auth === null ? config.mailgun.apiKey : auth.apiKey;
      // const domain = auth === null ? config.mailgun.domain : auth.domain;
      // const sender = from === null ? config.systemEmail : from;
      // const mailgun = new Mailgun(formData);
      // const client = mailgun.client({
      //     username: 'api',
      //     key: apiKey,
      // });
      // let postData = {
      //     from: sender,
      //     to,
      //     subject,
      //     html: body,
      // };
      // if (attachment) {
      //     postData = {
      //         ...postData,
      //         attachment,
      //     };
      // }
      // return !!(await client.messages.create(domain, postData));
    } catch (err) {
      console.log(err);
      logger.error(err);
      return false;
    }
  }

  async sendEmailWithAttachment(
    from,
    to,
    subject,
    text,
    body,
    attachment,
    auth = null
  ) {
    try {
      const apiKey = auth === null ? config.mailgun.apiKey : auth.apiKey;
      const domain = auth === null ? config.mailgun.domain : auth.domain;
      const mailgun = new Mailgun(formData);
      const attachments = [attachment];
      const client = mailgun.client({
        username: "api",
        key: apiKey,
      });

      const postData = {
        from,
        to,
        subject,
        text,
        html: body,
        attachments,
      };

      return !!(await client.messages.create(domain, postData));
    } catch (err) {
      logger.error(err);
      return false;
    }
  }
}

module.exports = EmailHelper;
