const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  itinerary: {
    type: Schema.Types.ObjectId,
    ref: "Itinerary",
    required: true
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true
  },
  details: {
    type: {
      title: { type: String, required: true },
      activityPic: { type: String, required: false }
    },
    required: false
  },
  duration: {
    type: String
  },
  address: {
    type: String
  },
  price: {
    type: String
  },
  comments: {
    type: [String]
  },
  summary: {
    type: String
  }
});

module.exports = mongoose.model("Activity", ActivitySchema, "activities");
