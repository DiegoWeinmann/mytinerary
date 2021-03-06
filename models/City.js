const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  country: {
    type: String,
    lowercase: true,
    required: true
  },
  img: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("City", CitySchema, "cities");
