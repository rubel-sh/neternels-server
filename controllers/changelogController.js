const Changelog = require("../models/changelog");

const addChangelog = async (req, res) => {
    try {
        const data = req.body;
        const addChangelog = new Changelog(data);
        const result = await addChangelog.save();
        res.status(200).json({ result });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

module.exports = { addChangelog };
