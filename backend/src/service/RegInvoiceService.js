const PDFDocument = require("pdfkit");
const fs = require("fs");
const PaymentsDao = require("../dao/PaymentsDao");
const UserDao = require("../dao/UserDao");

class RegInvoiceService {
  constructor() {
    this.paymentsDao = new PaymentsDao();
    this.userDao = new UserDao();
  }

  createInvoice = async (invoice, path) => {
    let doc = new PDFDocument({ size: "A4", margin: 50 });

    this.generateHeader(doc);
    this.generateCustomerInformation(doc, invoice);
    this.generateInvoiceTable(doc, invoice);
    this.generateFooter(doc);

    doc.end();
    doc.pipe(fs.createWriteStream(path));
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

  generateCustomerInformation = async (doc, invoice) => {
    doc.fillColor("#444444").fontSize(20).text("BUKTI PEMBAYARAN", 50, 160);

    this.generateHr(doc, 185);

    const customerInformationTop = 200;

    doc
      .fontSize(10)
      .text("Invoice Number:", 50, customerInformationTop)
      .font("Helvetica-Bold")
      .text(invoice.order_id, 150, customerInformationTop)
      .font("Helvetica")
      .text("Invoice Date:", 50, customerInformationTop + 15)
      .text(
        this.formatDate(new Date(invoice.created_at)),
        150,
        customerInformationTop + 15
      )
      // .text("Balance Due:", 50, customerInformationTop + 30)
      // .text(
      //   this.formatCurrency(invoice.subtotal - invoice.paid),
      //   150,
      //   customerInformationTop + 30
      // )

      .font("Helvetica-Bold")
      .text(invoice.user.full_name, 300, customerInformationTop)
      .font("Helvetica")
      .text(invoice.user.email, 300, customerInformationTop + 15)
      // .text(
      //   invoice.shipping.city +
      //     ", " +
      //     invoice.shipping.state +
      //     ", " +
      //     invoice.shipping.country,
      //   300,
      //   customerInformationTop + 30
      // )
      .moveDown();

    this.generateHr(doc, 252);
  };

  generateInvoiceTable = async (doc, invoice) => {
    let i;
    const invoiceTableTop = 330;

    doc.font("Helvetica-Bold");
    this.generateTableRow(
      doc,
      invoiceTableTop,
      "No",
      "Description",
      "Jumlah (Rp.)"
    );
    this.generateHr(doc, invoiceTableTop + 20);
    doc.font("Helvetica");

    for (i = 0; i < 1; i++) {
      // const item = invoice.items[i];
      const position = invoiceTableTop + (i + 1) * 30;
      this.generateTableRow(
        doc,
        position,
        1,
        // invoice.remark,
        invoice.full_payment ? "Pendaftaran (Full Payment)" : "Pendaftaran",
        this.formatCurrency(invoice.gross_amount)
      );

      // for (i = 0; i < invoice.items.length; i++) {
      //   const item = invoice.items[i];
      //   const position = invoiceTableTop + (i + 1) * 30;
      //   this.generateTableRow(
      //     doc,
      //     position,
      //     item.item,
      //     item.description,
      //     this.formatCurrency(item.amount / item.quantity),
      //     item.quantity,
      //     this.formatCurrency(item.amount)
      //   );

      this.generateHr(doc, position + 20);
    }

    const subtotalPosition = invoiceTableTop + (i + 1) * 30;
    this.generateTableRow(
      doc,
      subtotalPosition,
      "",
      "Total",
      this.formatCurrency(invoice.gross_amount)
    );

    // const paidToDatePosition = subtotalPosition + 20;
    // this.generateTableRow(
    //   doc,
    //   paidToDatePosition,
    //   "",
    //   "",
    //   "Paid To Date",
    //   "",
    //   this.formatCurrency(invoice.paid)
    // );

    // const duePosition = paidToDatePosition + 25;
    // doc.font("Helvetica-Bold");
    // this.generateTableRow(
    //   doc,
    //   duePosition,
    //   "",
    //   "",
    //   "Balance Due",
    //   "",
    //   this.formatCurrency(invoice.subtotal - invoice.paid)
    // );
    // doc.font("Helvetica");
  };

  generateFooter = async (doc) => {
    doc
      .fontSize(10)
      .text("Terima kasih sudah melakukan pembayaran tepat waktu.", 50, 780, {
        align: "center",
        width: 500,
      });
  };

  generateTableRow = async (doc, y, item, description, lineTotal) => {
    doc
      .fontSize(10)
      .text(item, 50, y)
      .text(description, 150, y)
      .text(lineTotal, 0, y, { align: "right" });
  };

  generateHr = async (doc, y) => {
    doc
      .strokeColor("#aaaaaa")
      .lineWidth(1)
      .moveTo(50, y)
      .lineTo(550, y)
      .stroke();
  };

  formatCurrency = (cents) => {
    const rupiah = cents.toFixed(2);
    const formattedRupiah = parseFloat(rupiah).toLocaleString("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return "Rp." + formattedRupiah;
  };

  formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return day + "/" + month + "/" + year;
  };
}
module.exports = RegInvoiceService;
