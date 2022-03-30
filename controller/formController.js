const fs = require("fs");
const I94 = require("../model/I94");
const homePage = fs.readFileSync(`${__dirname}/../view/index.html`, "utf-8");

function getI94Model(input) {
  const userInfo = { ...input };
  userInfo.document = +userInfo.document;
  userInfo.dob = `${userInfo.day}/${userInfo.month}/${userInfo.year}`;

  delete userInfo.day;
  delete userInfo.month;
  delete userInfo.year;

  return userInfo;
}

function displayForm(html) {
  let page = html.replace("{%I94%}", "inactive");
  page = page.replace("{%TRAVELER_TAB%}", "tab-active");
  return page;
}

function displayI94(html, user) {
  let i94 = html.replace("{%FORM%}", "inactive");
  i94 = i94.replace("{%I94_TAB%}", "tab-active");
  i94 = i94.replace(/{%FIRSTNAME%}/g, user.firstName);
  i94 = i94.replace(/{%LASTNAME%}/g, user.lastName);
  i94 = i94.replace(/{%DOB%}/g, user.dob);
  i94 = i94.replace(/{%DOCUMENT%}/g, user.document + "");
  i94 = i94.replace(/{%COUNTRY%}/g, user.country);
  return i94;
}
exports.getHomePage = function (req, res) {
  res.send(displayForm(homePage));
};

exports.postSubmitForm = function (req, res) {
  const userInfo = getI94Model(req.body);
  let page = "";
  I94.findOne(userInfo, (_, doc) => {
    page = doc ? displayI94(homePage, userInfo) : displayForm(homePage);
    res.send(page);
  });
};
