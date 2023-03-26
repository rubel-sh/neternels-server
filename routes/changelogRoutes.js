const express = require("express");
const router = express.Router();
const { addChangelog } = require("../controllers/changelogController");

router.use("/", addChangelog);

module.exports = router;
