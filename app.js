//app related stuff
const express = require("express");
const app = express();

//middlewares
app.use(express.static(__dirname)); //helps to serve static files
