const fs = require("fs");
const I94 = require("../model/I94");
const homePage = fs.readFileSync(
  `${__dirname}\\..\\public\\index.html`,
  "utf-8"
);

exports.getHomePage = function (req, res) {
  res.send(homePage);
};

exports.postSubmitForm = function (req, res) {
  console.log("post");
  console.log(req.body);
  res.end("<h1> Damn </h1>");
};
