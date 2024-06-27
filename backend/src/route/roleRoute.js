const express = require("express");
const RolesController = require("../controllers/RolesController");
const RoleValidator = require("../validator/RoleValidator");

const router = express.Router();
const auth = require("../middlewares/auth");

const rolesController = new RolesController();
const roleValidator = new RoleValidator();

router.post(
  "/create",
  auth(),
  roleValidator.roleCreateUpdateValidator,
  rolesController.create
);

router.put(
  "/update/:id",
  auth(),
  roleValidator.roleCreateUpdateValidator,
  rolesController.update
);

router.get("/show/:id", auth(), rolesController.show);

router.get("/show-all", auth(), rolesController.showAll);

router.delete("/delete/:id", auth(), rolesController.delete);

module.exports = router;
