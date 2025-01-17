const SuperDao = require("./SuperDao");
const models = require("../models");
const { Op } = require("sequelize");

const Candidates = models.candidates;
const Parents = models.parents;
const Siblings = models.siblings;
const Provinces = models.provinces;
const Cities = models.cities;
const Districts = models.districts;
const SubDistricts = models.subdistricts;
const HealthForm = models.healthform;
const MedicalHistory = models.medicalhistory;
const Senses = models.senses;
const User = models.user;
const Relationship = models.relationship;
const Questionnaire = models.questionnaire;

class CandidatesDao extends SuperDao {
  constructor() {
    super(Candidates);
  }

  async getOne(id) {
    return Candidates.findAll({
      where: { id },
      attributes: {
        exclude: [
          "user_id",
          "province_id",
          "city_id",
          "district_id",
          "sub_district_id",
          "email",
          "phone",
          "is_transfer",
          "form_path",
          "status_class",
          "is_graduated",
          "createdAt",
          "updatedAt",
        ],
      },
      include: [
        {
          model: Parents,
          attributes: { exclude: ["candidate_id", "createdAt", "updatedAt"] },
        },
        {
          model: Siblings,
          attributes: { exclude: ["candidate_id", "createdAt", "updatedAt"] },
        },
        {
          model: Provinces,
        },
        {
          model: Cities,
          attributes: { exclude: ["province_id"] },
        },
        {
          model: Districts,
          attributes: { exclude: ["city_id"] },
        },
        {
          model: SubDistricts,
          attributes: { exclude: ["district_id"] },
        },
        {
          model: HealthForm,
          attributes: { exclude: ["candidate_id", "createdAt", "updatedAt"] },
        },
        {
          model: Senses,
          attributes: { exclude: ["candidate_id", "createdAt", "updatedAt"] },
        },
        // {
        //   model: MedicalHistory,
        //   attributes: { exclude: ["candidate_id", "createdAt", "updatedAt"] },
        // },
        // {
        //   model: Relationship,
        // },
        // {
        //   model: Questionnaire,
        // },
      ],
    });
  }

  async getExportData(id){
    return Candidates.findOne({
      where: { id },
      include: [
        { model: Parents },
      ]
    })
  }

  async getOneCandidate(id) {
    return Candidates.findAll({
      where: { id },
      attributes: {
        exclude: [
          "user_id",
          "province_id",
          "city_id",
          "district_id",
          "sub_district_id",
          "email",
          "phone",
          "is_transfer",
          "form_path",
          "status_class",
          "is_graduated",
          "createdAt",
          "updatedAt",
        ],
      },
      include: [
        {
          model: Provinces,
        },
        {
          model: Cities,
          attributes: { exclude: ["province_id"] },
        },
        {
          model: Districts,
          attributes: { exclude: ["city_id"] },
        },
        {
          model: SubDistricts,
          attributes: { exclude: ["district_id"] },
        },
      ],
    });
  }

  async getOneSiblings(candidate_id) {
    return Siblings.findAll({
      where: { candidate_id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  }

  async getOneParents(candidate_id) {
    return Parents.findAll({
      where: { candidate_id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  }

  async getOneHealth(candidate_id) {
    return HealthForm.findAll({
      where: { candidate_id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Candidates,
          attributes: ["full_name", "pob", "dob", "residence_addr"],
        },
      ],
    });
  }

  async getOneHealth(candidate_id) {
    return HealthForm.findAll({
      where: { candidate_id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Candidates,
          attributes: ["full_name", "pob", "dob", "residence_addr"],
        },
      ],
    });
  }

  async getOneMedicalHistory(candidate_id) {
    return MedicalHistory.findAll({
      where: { candidate_id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  }

  async getOneSenses(candidate_id) {
    return Senses.findAll({
      where: { candidate_id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  }

  async getOneRelationship(candidate_id) {
    return Relationship.findAll({
      where: { candidate_id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  }

  async getOneQuestionnaire(candidate_id) {
    return Questionnaire.findAll({
      where: { candidate_id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  }

  async getAll() {
    return Candidates.findAll({
      include: [
        {
          model: Parents,
          // attributes: ["id", "parent_type", "nik", "name"],
        },
      ],
    });
  }

  async getAllByUserId(user_id) {
    return Candidates.findAll({
      where: { user_id },
      include: [
        {
          model: Parents,
          // attributes: ["id", "parent_type", "nik", "name"],
        },
      ],
    });
  }

  async findByIds(ids) {
    return Candidates.findAll({
      where: { id: { [Op.in]: ids } },
    });
  }

  async setExpotedArr(ids) {
    return Candidates.update(
      { exported: true },
      {
        where: { id: { [Op.in]: ids } },
      }
    );
  }

  async getCount(search) {
    return Candidates.count({
      where: {
        [Op.or]: [
          {
            nisn: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            full_name: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            nick_name: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            gender: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            dob: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            pob: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            residence_addr: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            email: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            phone: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            education_level: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            class: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            origin_pg: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            origin_kgarten: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            origin_elementary: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            origin_secondary: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            last_class: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            address_school: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            remark: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
    });
  }

  async getCandidatesPage(search, offset, limit) {
    return Candidates.findAll({
      where: {
        [Op.or]: [
          {
            nisn: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            full_name: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            nick_name: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            gender: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            dob: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            pob: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            residence_addr: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            email: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            phone: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            education_level: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            class: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            origin_pg: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            origin_kgarten: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            origin_elementary: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            origin_secondary: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            last_class: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            address_school: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            remark: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      include: [
        {
          model: User,
          required: false
        }
      ],
      offset: offset,
      limit: limit,
      order: [["id", "DESC"]],
    });
  }
}

module.exports = CandidatesDao;
