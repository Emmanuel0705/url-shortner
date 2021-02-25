const express = require("express");
const router = express.Router();
const { Redirect } = require("../controllers/redirect");

router.route("/:url").get(Redirect);
module.exports = router;
