//app related stuff
const express = require("express");
const bodyParser = require("body-parser");

const formRouter = require("./routes/formRouter");
const app = express();

//middlewares
app.use(express.static(`${__dirname}/public/`)); //helps to serve static files
app.use(bodyParser.urlencoded({ extended: true })); //helps to parse urls for post data
app.use("/", formRouter);

module.exports = app;
