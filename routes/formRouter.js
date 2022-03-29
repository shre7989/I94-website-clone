const express = require("express");
const { getHomePage, postSubmitForm } = require("../controller/formController");

const formRouter = express.Router();

formRouter.route("/").get(getHomePage).post(postSubmitForm);

module.exports = formRouter;
