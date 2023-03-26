const Device = require("../models/device");
const addDevice = async (req, res) => {
    try {
        const data = req.body;
        const addDevice = new Device(data);
        const result = await addDevice.save();
        res.status(200).json({ result });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

module.exports = { addDevice };
