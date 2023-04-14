const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        codename: {
            type: String,
            required: true,
        },
        supports: {
            type: String,
            required: true,
        },
        kernelVersion: {
            type: String,
            required: true,
        },

        maintainer: {
            type: String,
            required: true,
        },
        maintainerLinks: {
            github: String,
            telegram: String,
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
        },
        downloadLink: {
            type: String,
            required: true,
        },
        supportGroup: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;
