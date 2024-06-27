const Joi = require("joi");
const httpStatus = require("http-status");
const ApiError = require("../helper/ApiError");

class CandidateValidator {
  async candidateCreateUpdateValidator(req, res, next) {
    // create schema object
    const schema = Joi.object({
      user_id: Joi.number().required(),
      nisn: Joi.string().allow("", null),
      full_name: Joi.string().required(),
      nick_name: Joi.string().allow("", null),
      gender: Joi.string().allow("", null),
      dob: Joi.date().required(),
      pob: Joi.string().allow("", null),
      birth_order: Joi.number().allow("", null),
      number_of_siblings: Joi.number().allow("", null),
      province_id: Joi.number().allow("", null),
      city_id: Joi.number().allow("", null),
      district_id: Joi.number().allow("", null),
      sub_district_id: Joi.number().allow("", null),
      residence_addr: Joi.string().allow("", null),
      email: Joi.string().allow("", null),
      phone: Joi.string().allow("", null),
      education_level: Joi.string().required(),
      class: Joi.string().required().allow("", null),
      origin_pg: Joi.string().allow("", null),
      origin_kgarten: Joi.string().allow("", null),
      origin_elementary: Joi.string().allow("", null),
      origin_secondary: Joi.string().allow("", null),
      is_transfer: Joi.boolean().allow("", null),
      last_class: Joi.string().allow("", null),
      address_school: Joi.string().allow("", null),
      remark: Joi.string().allow("", null),
      approved: Joi.number().allow("", null),
    });

    // schema options
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    // validate request body against schema
    const { error, value } = schema.validate(req.body, options);

    if (error) {
      // on fail return comma separated errors
      const errorMessage = error.details
        .map((details) => {
          return details.message;
        })
        .join(", ");
      next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    } else {
      // on success replace req.body with validated value and trigger next middleware function
      req.body = value;
      return next();
    }
  }
}

module.exports = CandidateValidator;
