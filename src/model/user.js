const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});
const Users = mongoose.model("users", userSchema);
// const cat = new Kitten({ name: "Htisme Cat" });
// cat.save();
module.exports = Users;
