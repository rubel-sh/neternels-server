const express = require("express");
const router = express.Router();
const { addDevice } = require("../controllers/deviceController");

router.post("/", addDevice);

module.exports = router;
