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
  user: {
    type: String,
    required: false
  },
  rating: {
    type: String
  },
  duration: {
    type: String
  },
  price: {
    type: String,
    default: "0"
  },
  total_price: {
    type: String,
    default: "0"
  },
  hashtag: {
    type: [String]
  }
});

module.exports = mongoose.model("Itinerary", ItinerarySchema, "itineraries");
