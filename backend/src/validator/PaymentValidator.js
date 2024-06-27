const Joi = require("joi");
const httpStatus = require("http-status");
const ApiError = require("../helper/ApiError");

class PaymentValidator {
  async paymentCreateUpdateValidator(req, res, next) {
    // create schema object
    const schema = Joi.object({
      user_id: Joi.number().required(),
      order_id: Joi.string().required(),
      payment_type: Joi.string().required(),
      gross_amount: Joi.number().required(),
      bank: Joi.string().required(),
      full_payment: Joi.boolean().required(),
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

module.exports = PaymentValidator;
