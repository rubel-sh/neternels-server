const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ["active", "inactive"], // accepts either active or inctive
    },
    date: {
        type: DataTransfer,
        default: Date.now,
    },
});

module.exports = todoSchema;
