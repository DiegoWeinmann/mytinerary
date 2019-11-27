const fs = require("fs");
const ItineraryModel = require("../models/Itinerary");
const CityModel = require("../models/City");

require("../config/db");

fs.readFile("resources/data.json", (err, data) => {
  if (err) console.log(err);
  const itineraries = JSON.parse(data);

  itineraries.forEach(async itinerary => {
    try {
      const cityId = await CityModel.findOne({
        name: itinerary.city
      });
      if (cityId) {
        const newItinerary = new ItineraryModel({
          title: itinerary.title,
          city: cityId._id,
          country: itinerary.country,
          username: itinerary.username,
          rating: Number(itinerary.rating),
          duration: Number(itinerary.duration),
          price: 0,
          hashtag: itinerary.hashtag.split("#").slice(1)
        });
        await newItinerary.save();
        console.log("itinerary created");
      } else {
        console.log(itinerary.city + " not found");
      }
    } catch (err) {
      console.log(err);
    }
  });
});
