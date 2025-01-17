const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const UserDao = require("../dao/UserDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");
const config = require("../config/config");
const { userConstant } = require("../config/constant");
const EmailHelper = require("../helper/EmailHelper");
const EmailResetHelper = require("../helper/EmailResetHelper");
const crypto = require("crypto");

class UserService {
  constructor() {
    this.userDao = new UserDao();
    this.mailHelper = new EmailHelper();
    this.mailResetHelper = new EmailResetHelper();
  }

  /**
   * Create a user
   * @param {Object} userBody
   * @returns {Object}
   */
  createUser = async (userBody) => {
    try {
      let message =
        "Successfully Registered the account! Please Verify your email.";
      if (await this.userDao.isEmailExists(userBody.email)) {
        return responseHandler.returnError(
          httpStatus.BAD_REQUEST,
          "Email already taken"
        );
      }
      const uuid = uuidv4();
      userBody.email = userBody.email.toLowerCase();
      userBody.password = bcrypt.hashSync(userBody.password, 8);
      userBody.uuid = uuid;
      userBody.status = userConstant.STATUS_ACTIVE;
      userBody.email_verified = userConstant.EMAIL_VERIFIED_FALSE;
      userBody.role_id = userConstant.ROLE_USER;
      userBody.reg_state = userConstant.INITIAL_REG_STATE;
      userBody.active_state = userConstant.INITIAL_ACTIVE_STATE;

      let userData = await this.userDao.create(userBody);

      if (!userData) {
        message = "Registration Failed! Please Try again.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      userData = userData.toJSON();
      delete userData.password;

      // Add Nodemailer
      this.mailHelper.sendEmail(
        userBody.uuid,
        config.email.account,
        userBody.email,
        config.email.subject
      );

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        userData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  /**
   * Get user
   * @param {String} email
   * @returns {Object}
   */

  isEmailExists = async (email) => {
    const message = "Email found!";
    if (!(await this.userDao.isEmailExists(email))) {
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Email not Found!!"
      );
    }
    return responseHandler.returnSuccess(httpStatus.OK, message);
  };

  getUserByUuid = async (uuid) => {
    return this.userDao.findOneByWhere({ uuid });
  };

  getAccountByUuid = async (uuid) => {
    const message = "Email Verified !";
    let user = await this.userDao.findOneByWhere({ uuid });

    if (!user) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Account Not found!"
      );
    }

    const updateUser = await this.userDao.updateWhere(
      { email_verified: true },
      { uuid }
    );

    if (updateUser) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  changePassword = async (data, uuid) => {
    let message = "Login Successful";
    let statusCode = httpStatus.OK;
    let user = await this.userDao.findOneByWhere({ uuid });

    if (!user) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "User Not found!"
      );
    }

    if (data.password !== data.confirm_password) {
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Confirm password not matched"
      );
    }

    const isPasswordValid = await bcrypt.compare(
      data.old_password,
      user.password
    );
    user = user.toJSON();
    delete user.password;
    if (!isPasswordValid) {
      statusCode = httpStatus.BAD_REQUEST;
      message = "Wrong old Password!";
      return responseHandler.returnError(statusCode, message);
    }
    const updateUser = await this.userDao.updateWhere(
      { password: bcrypt.hashSync(data.password, 8) },
      { uuid }
    );

    if (updateUser) {
      return responseHandler.returnSuccess(
        httpStatus.OK,
        "Password updated Successfully!",
        {}
      );
    }

    return responseHandler.returnError(
      httpStatus.BAD_REQUEST,
      "Password Update Failed!"
    );
  };

  updateUser = async (id, req) => {
    const message = "User data successfully updated!";

    let userData = await this.userDao.findById(id);

    if (!userData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "User not found!"
      );
    }

    const updateData = await this.userDao.updateWhere(
      {
        full_name: req.body.full_name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        image_url: req.file == undefined ? null : req.file.path,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  updateStatusReg = async (id, req) => {
    const message = "Status updated!";

    let userData = await this.userDao.findById(id);

    if (!userData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "User not found!"
      );
    }

    const updateData = await this.userDao.updateWhere(
      {
        status: req.body.status,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  updateStateReg = async (id, req) => {
    try {
      const message = "Registration state updated!";

      let userData = await this.userDao.findById(id);

      if (!userData) {
        return responseHandler.returnError(
          httpStatus.NOT_FOUND,
          "User not found!"
        );
      }

      const updateData = await this.userDao.updateWhere(
        {
          reg_state: req.body.reg_state,
        },
        { id }
      );

      if (updateData) {
        return responseHandler.returnSuccess(httpStatus.OK, message, {});
      }
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateActiveState = async (id, req) => {
    try {
      const message = "Active state updated!";

      let userData = await this.userDao.findById(id);

      if (!userData) {
        return responseHandler.returnError(
          httpStatus.NOT_FOUND,
          "User not found!"
        );
      }

      const updateData = await this.userDao.updateWhere(
        {
          active_state: req.body.active_state,
        },
        { id }
      );

      if (updateData) {
        return responseHandler.returnSuccess(httpStatus.OK, message, {});
      }
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  showAllUsers = async () => {
    const message = "All users successfully retrieved!";

    let users = await this.userDao.findAll();

    if (!users) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "User not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, users);
  };

  showRecapStatus = async () => {
    let users = await this.userDao.getStatusData()
    if (!users) return responseHandler.returnError(httpStatus.NOT_FOUND, "User not found!");

    return responseHandler.returnSuccess(httpStatus.OK, "User Status Recap Sucessfully Retrived", users);
  }

  forgotPassword = async (body) => {
    const message = "Password reset link sent!";

    const user = await this.userDao.findByEmail(body.email);
    if (!user) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "User not found!"
      );
    }
    const token = crypto.randomBytes(20).toString("hex");
    const resetToken = crypto.createHash("sha256").update(token).digest("hex"); // hash the token

    const resetTokenExp = new Date(Date.now() + 10 * 60 * 1000);

    await this.userDao.updateWhere(
      { reset_token: resetToken, reset_token_exp: resetTokenExp },
      { email: body.email }
    );

    const url = config.webUrl + `/reset-password/${token}`; //Link web to reset password

    // send email
    this.mailResetHelper.sendEmail(
      url,
      config.email.account,
      body.email,
      "Reset Password"
    );

    return responseHandler.returnSuccess(httpStatus.OK, message, {
      url,
      email: body.email,
    });
  };

  resetPassword = async (body) => {
    const message = "Password reset successfully!";

    const token = body.token;

    const resetToken = crypto.createHash("sha256").update(token).digest("hex"); // hash the token

    const user = await this.userDao.findByResetToken(resetToken);

    if (!user) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Invalid token or token has expired !"
      );
    }

    const pass = bcrypt.hashSync(body.password, 8);

    await this.userDao.updateWhere(
      { password: pass },
      { reset_token: resetToken }
    );

    return responseHandler.returnSuccess(httpStatus.OK, message, {});
  };
}

module.exports = UserService;
