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

const getDevices = async (req, res) => {
    try {
        console.log("I'm coming");
        const latestDevice = await Device.find({});
        return res.status(200).json({ latestDevice });
    } catch (err) {
        console.log("I'm failed to get latest kernel");
        res.status(404).json({ message: err.message });
    }
};

module.exports = { addDevice, getDevices };
