const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASE_URI.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB CONNECTED ✅✅"))
  .catch((err) => console.log(err));

const I94Schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String, required: true },
  document: { type: Number, required: true },
  country: { type: String, required: true },
});

const I94 = mongoose.model("I94", I94Schema, "I94-Records");

module.exports = I94;
