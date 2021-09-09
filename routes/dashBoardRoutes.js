const express = require("express");
const dashBoardController = require("../controllers/dashBoardController");
const router = express.Router();

router.get("/", dashBoardController.showDashBoardPage);

module.exports = router;
