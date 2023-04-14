const express = require("express");
const router = express.Router();
const { addDevice, getDevices } = require("../controllers/deviceController");

router.post("/", addDevice);
router.get("/", getDevices);

module.exports = router;
