const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
const validator = require("../validators/users/createNewUserValidator");

router.get("/", usersController.showLoginPage);
router.get("/login", usersController.showLoginPage);
router.get("/register", usersController.showRegisterPage);

router.post("/register", validator, usersController.createNewUser);

module.exports = router;
