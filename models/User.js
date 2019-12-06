const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("User", UserModel, "users");
