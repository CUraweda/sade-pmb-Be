const userConstant = {
  EMAIL_VERIFIED_TRUE: 1,
  EMAIL_VERIFIED_FALSE: 0,
  STATUS_ACTIVE: 1,
  STATUS_INACTIVE: 0,
  STATUS_REMOVED: 2,
  ROLE_USER: 4,
  INITIAL_REG_STATE: 0,
  INITIAL_ACTIVE_STATE: 0,
  PAYMENT_REG_STATE: 2,
  FORM_INPUT_REG_STATE: 2,
};
const verificationCodeConstant = {
  TYPE_EMAIL_VERIFICATION: 1,
  TYPE_RESET_PASSWORD: 2,
  STATUS_NOT_USED: 0,
  STATUS_USED: 1,
};

module.exports = {
  userConstant,
  verificationCodeConstant,
};
