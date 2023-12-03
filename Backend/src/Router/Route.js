const { getHome } = require("../controller/Controller");
const express = require("express");

const router = express.Router();

router.get("/", getHome);

module.exports = router;
