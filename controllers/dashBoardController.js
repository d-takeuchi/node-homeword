module.exports = {
  showDashBoardPage: (req, res) => {
    res.render("dashBoard/index", {
      loginUserName: req.query.loginUserName,
    });
  },
};
