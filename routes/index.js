const express = require("express");
const dashBoardRoutes = require("./dashBoardRoutes");
const userRoutes = require("./userRoutes");
const router = express.Router();

//ルートパスにアクセスがあった場合、users（ログイン画面）にリダイレクト
router.get("/", (req, res) => {
  res.redirect("users");
});

router.use("/dashBoard", dashBoardRoutes);
router.use("/users", userRoutes);

module.exports = router;
