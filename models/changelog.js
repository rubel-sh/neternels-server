const mongoose = require("mongoose");

const changelogSchema = new mongoose.Schema(
    {
        codename: {
            type: String,
            require: true,
        },

        changelogs: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

const Changelog = mongoose.model("Changelog", changelogSchema);

module.exports = Changelog;
