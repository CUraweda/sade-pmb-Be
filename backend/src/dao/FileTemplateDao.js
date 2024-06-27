const SuperDao = require("./SuperDao");
const models = require("../models");

const FileTemplate = models.filetemplate;
const Candidates = models.candidates;

class FileTemplateDao extends SuperDao {
  constructor() {
    super(FileTemplate);
  }

  async getByCandidateId(candidate_id) {
    return FileTemplate.findAll({
      where: { candidate_id },
      include: [
        {
          model: Candidates,
          attributes: ["id", "full_name"],
        },
      ],
    });
  }

  async getAll() {
    return FileTemplate.findAll({
      include: [
        {
          model: Candidates,
          attributes: ["id", "full_name"],
        },
      ],
    });
  }

  async getCount(search) {
    return FileTemplate.count({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            mime_type: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            path: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            filename: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            original_filename: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
    });
  }

  async getFileTemplatePage(search, offset, limit) {
    return FileTemplate.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            mime_type: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            path: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            filename: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            original_filename: {
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
}

module.exports = FileTemplateDao;
