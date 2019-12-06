require("../../../config/db");
const fs = require("fs");
const path = require("path");

const CityModel = require("../../../models/City");

exports.loadCityData = async () => {
  const filePath = path.join(__dirname, "citiesData.json");
  console.log("city: " + filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) console.log(err);
    const cities = JSON.parse(data);
    console.log(cities.length);
    cities.forEach(async city => {
      try {
        const newCity = new CityModel({
          name: city.name,
          country: city.country,
          img: city.img
        });
        await newCity.save();
        console.log(city.name + " added");
      } catch (err) {
        console.log("city not added " + city);
        console.log(err);
      }
    });
  });
};
