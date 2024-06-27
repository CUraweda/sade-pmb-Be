const SuperDao = require("./SuperDao");
const models = require("../models");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");

const Payments = models.payments;
const Users = models.user;

class PaymentsDao extends SuperDao {
  constructor() {
    super(Payments);
  }

  async findAllData() {
    return Payments.findAll({
      attributes: [
        "id",
        "user_id",
        "order_id",
        "payment_type",
        "gross_amount",
        "transaction_status",
        "full_payment",
        "remark",
        "payment_proof",
        "invoice_path",
        [
          Sequelize.fn("max", Sequelize.col("payments.created_at")),
          "created_at",
        ],
      ],
      where: [{ full_payment: 0 }],
      group: ["user_id"],
      order: Sequelize.literal("payments.created_at DESC"),
      include: [{ model: Users, attributes: ["id", "full_name", "email"] }],
    });
  }

  async findAllDataFull() {
    return Payments.findAll({
      attributes: [
        "id",
        "user_id",
        "order_id",
        "payment_type",
        "gross_amount",
        "transaction_status",
        "full_payment",
        "remark",
        "payment_proof",
        "invoice_path",
        [
          Sequelize.fn("max", Sequelize.col("payments.created_at")),
          "created_at",
        ],
      ],
      where: [{ full_payment: 1 }],
      group: ["user_id"],
      order: Sequelize.literal("payments.created_at DESC"),
      include: [{ model: Users, attributes: ["id", "full_name", "email"] }],
    });
  }

  async findAllDataFullByUserId(user_id) {
    return Payments.findAll({
      attributes: [
        "id",
        "user_id",
        "order_id",
        "payment_type",
        "gross_amount",
        "transaction_status",
        "full_payment",
        "remark",
        "payment_proof",
        "invoice_path",
        [
          Sequelize.fn("max", Sequelize.col("payments.created_at")),
          "created_at",
        ],
      ],
      where: { [Op.and]: [{ user_id }, { full_payment: 1 }] },
      group: ["user_id"],
      order: Sequelize.literal("payments.created_at DESC"),
      include: [{ model: Users, attributes: ["id", "full_name", "email"] }],
    });
  }

  async findAllWithUserId(user_id) {
    return Payments.findAll({
      attributes: [
        "id",
        "user_id",
        "order_id",
        "payment_type",
        "gross_amount",
        "transaction_status",
        "response_midtrans",
        "full_payment",
        "remark",
        "payment_proof",
        "invoice_path",
        "created_at",
      ],
      where: [{ user_id }],
      order: Sequelize.literal("payments.created_at DESC"),
      include: [{ model: Users, attributes: ["id", "full_name", "email"] }],
    });
  }

  async getCount(search) {
    return Payments.count({
      where: {
        [Op.or]: [
          {
            order_id: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            transaction_status: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
    });
  }

  async getPaymentsPage(search, offset, limit) {
    return Payments.findAll({
      where: {
        [Op.or]: [
          {
            order_id: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            transaction_status: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      offset: offset,
      limit: limit,
      order: [["id", "DESC"]],
    });
  }

  async findSettlementByFullPayment(full_payment) {
    return Payments.findAll({
      attributes: [
        [
          Sequelize.fn("max", Sequelize.col("payments.created_at")),
          "created_at",
        ],
        [Sequelize.literal("user.full_name"), "payment_by"],
        [Sequelize.literal("user.email"), "email"],
        "order_id",
        "payment_type",
        "gross_amount",
        "transaction_status",
        "full_payment",
        "remark",
        "payment_proof",
        "invoice_path",
      ],
      where: [{ full_payment, transaction_status: "settlement" }],
      group: ["user_id"],
      order: Sequelize.literal("payments.created_at DESC"),
      include: [{ model: Users, attributes: [] }],
    });
  }

  async getById(id) {
    return Payments.findAll({
      attributes: [
        "id",
        "user_id",
        "order_id",
        "payment_type",
        "gross_amount",
        "transaction_status",
        "response_midtrans",
        "full_payment",
        "remark",
        "payment_proof",
        "invoice_path",
        "created_at",
      ],
      where: [{ id }],
      include: [{ model: Users, attributes: ["id", "full_name", "email"] }],
    });
  }
}

module.exports = PaymentsDao;
