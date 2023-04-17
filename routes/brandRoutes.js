const express = require("express");
const router = express.Router();
const { addBrand, getBrands } = require("../controllers/brandColtroller");

router.post("/", addBrand);
router.get("/", getBrands);

module.exports = router;
