const Joi = require("joi");
const httpStatus = require("http-status");
const ApiError = require("../helper/ApiError");

class AnnouncementValidator {
  async announcementCreateUpdateValidator(req, res, next) {
    // create schema object
    const schema = Joi.object({
      candidate_id: Joi.number().allow("", null),
      code: Joi.string().allow("", null),
      start_date: Joi.date().allow("", null),
      end_date: Joi.date().allow("", null),
      location: Joi.string().allow("", null),
      contact_person: Joi.string().allow("", null),
      school_start_date: Joi.date().allow("", null),
      remark: Joi.string().allow("", null),
      result_url: Joi.string().allow("", null),
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

module.exports = AnnouncementValidator;
