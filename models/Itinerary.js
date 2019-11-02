const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
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
    type: Array
  }
});

module.exports = mongoose.model('itinerary', ItinerarySchema);