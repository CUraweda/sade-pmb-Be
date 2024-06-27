const Joi = require("joi");
const httpStatus = require("http-status");
const ApiError = require("../helper/ApiError");

class HealthFormValidator {
  async healthFormCreateUpdateValidator(req, res, next) {
    // create schema object
    const schema = Joi.object({
      candidate_id: Joi.number().allow("", null),
      weight: Joi.number().allow("", null),
      height: Joi.number().allow("", null),
      address: Joi.string().allow("", null),
      parent_name: Joi.string().allow("", null),
      blood_type: Joi.string().allow("", null),
      health_insurance_no: Joi.string().allow("", null),
      emergency_contact_one: Joi.string().allow("", null),
      emergency_contact_two: Joi.string().allow("", null),
      phone_one: Joi.string().allow("", null),
      phone_two: Joi.string().allow("", null),
      hospital_one: Joi.string().allow("", null),
      hospital_two: Joi.string().allow("", null),
      doctor_one: Joi.string().allow("", null),
      doctor_two: Joi.string().allow("", null),
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

module.exports = HealthFormValidator;
