const { validationResult } = require("express-validator");

module.exports = {
  showLoginPage: (req, res) => {
    res.render("users/login");
  },
  showRegisterPage: (req, res) => {
    res.render("users/register");
  },
  createNewUser: (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/register", {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        errors: errors.array(),
      });
    }

    res.redirect(`/dashboard?loginUserName=${req.body.name}`);
  },
};
