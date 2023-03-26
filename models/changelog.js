const mongoose = require("mongoose");

const changelogSchema = mongoose.Schema({
    codename: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    changelogs: {
        type: String,
        require: true,
    },
});

const Changelog = mongoose.model("Changelog", changelogSchema);

module.exports = Changelog;
