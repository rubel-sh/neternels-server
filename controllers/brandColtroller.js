const Brand = require("../models/brands");

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

module.exports = { addBrand };
