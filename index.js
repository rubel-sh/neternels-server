const express = require("express");

// exoress aoo initialization
const app = express();
app.use(express.json());

// application routes

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
