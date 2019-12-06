require("../../../config/db");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const ItineraryModel = require("../../../models/Itinerary");
const CityModel = require("../../../models/City");

exports.loadItineraryData = () => {
  const filePath = path.join(__dirname, "itinerariesData.json");
  console.log("itinerary: " + filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) console.log(err);
    const itineraries = JSON.parse(data);
    console.log(itineraries.length);
    itineraries.forEach(async itinerary => {
      try {
        const city = await CityModel.findOne({
          name: itinerary.city.toLowerCase()
        });

        if (city) {
          const newItinerary = new ItineraryModel({
            city: mongoose.Types.ObjectId(city._id),
            title: itinerary.title,
            // country: itinerary.country,
            user: itinerary.username,
            rating: Number(itinerary.rating),
            duration: itinerary.duration,
            total_price: itinerary.price,
            hashtags: itinerary.hashtag.split("#").slice(1)
          });
          await newItinerary.save();
          console.log("itinerary created " + itinerary.title);
        } else {
          console.log(
            itinerary.city + " not found, " + itinerary.title + " not created"
          );
        }
      } catch (err) {
        console.log(err);
      }
    });
  });
};
