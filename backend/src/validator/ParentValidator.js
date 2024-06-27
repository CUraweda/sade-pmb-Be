const Joi = require("joi");
const httpStatus = require("http-status");
const ApiError = require("../helper/ApiError");

class ParentValidator {
  async parentCreateUpdateValidator(req, res, next) {
    // create schema object
    const schema = Joi.object({
      candidate_id: Joi.number().allow("", null),
      parent_type: Joi.string().allow("", null),
      nik: Joi.string().allow("", null),
      name: Joi.string().allow("", null),
      pob: Joi.string().allow("", null),
      dob: Joi.date().allow("", null),
      citizen: Joi.string().allow("", null),
      religion: Joi.string().allow("", null),
      marriage_to: Joi.number().allow("", null),
      in_age: Joi.number().allow("", null),
      relationship_to_candidate: Joi.string().allow("", null),
      address: Joi.string().allow("", null),
      phone: Joi.string().allow("", null),
      email: Joi.string().allow("", null),
      com_priority: Joi.string().allow("", null),
      last_education: Joi.string().allow("", null),
      major: Joi.string().allow("", null),
      occupation: Joi.string().allow("", null),
      salary: Joi.string().allow("", null),
      field_of_work: Joi.string().allow("", null),
      field_of_work_others: Joi.string().allow("", null),
      position: Joi.string().allow("", null),
      position_others: Joi.string().allow("", null),
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

module.exports = ParentValidator;
