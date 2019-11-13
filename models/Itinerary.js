const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  city: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  profilePic: {
    type: String
  },
  rating: {
    type: Number
  },
  duration: {
    type: Number
  },
  price: {
    type: Number
  },
  hashtag: {
    type: [String]
  }
});

module.exports = mongoose.model("itinerary", ItinerarySchema);
