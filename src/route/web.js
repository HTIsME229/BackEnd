const express = require("express");
const { getHomePage, getABC } = require("../controller/homeController");
const router = express.Router();
router.get("/", getHomePage);
router.get("/abc", getABC);
module.exports = router;
