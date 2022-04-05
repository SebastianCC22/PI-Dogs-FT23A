const express = require("express");
const errHandler = express();


errHandler.use((err, req, res, next) => {
    const status = err.status || 400;
    const message = err.message;
    console.log(err);
    res.status(status).send(message);
})