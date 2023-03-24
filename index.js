const express = require("express");
const mongoose = require("mongoose");

// exoress aoo initialization
const app = express();
app.use(express.json());

// Database connection with mongoose
mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then(() => console.log("connection established"))
    .catch((err) => console.error(err));

// application routes
app.use("/todo", todoHandler);

// default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    res.status(500).json({ error: err });
}

app.listen(3000, () => {
    console.log("App is running on port 3000");
});
