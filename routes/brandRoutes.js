const express = require("express");
const router = express.Router();
const { addBrand } = require("../controllers/brandColtroller");

router.use("/", addBrand);

module.exports = router;
