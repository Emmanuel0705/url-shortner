const express = require("express");
const router = express.Router();
const { newURL } = require("../../controllers/shortener");

router.route("/").post(newURL);
module.exports = router;
