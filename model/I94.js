const mongoose = require("mongoose");

const DB =
  "mongodb+srv://admin:M9k1n7INBNb2NR5n@i94cluster.fbr70.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

const I94 = mongoose.model("I94", I94Schema);

module.exports = I94;
