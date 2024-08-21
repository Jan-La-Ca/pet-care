const express = require("express");
const router = express.Router();

var pageController = require("../controller/pageController");

router.get("/", pageController.getContractPage);

module.exports = router;
