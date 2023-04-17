const Brand = require("../models/brand");

const addBrand = async (req, res) => {
    try {
        const data = req.body;
        const addBrand = new Brand(data);
        const result = await addBrand.save();
        res.status(200).json({ result });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const getBrands = async (req, res) => {
    try {
        const getBrands = await Brand.find({});
        res.status(200).json({ response: getBrands });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

module.exports = { addBrand, getBrands };
