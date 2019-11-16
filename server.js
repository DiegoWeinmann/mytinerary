const express = require("express");
const app = express();
const router = express.Router();
/* database connection */
const mongoose = require("mongoose");
require("./config/db");
/* models */
const CityModel = require("./models/City");
const ItineraryModel = require("./models/Itinerary");

const port = process.env.PORT || 5000;

/* static content */
app.use(express.static("public"));

/* GET /cities/all */
router.route("/cities/all").get(async (req, res) => {
  try {
    const cities = await CityModel.find();
    return res.json(cities);
  } catch (error) {
    console.log(error);
    return res.json({ msg: error.message });
  }
});

/* GET /cities/:id/mytineraries/all */
router.route("/cities/:id/mytineraries/all").get(async (req, res, next) => {
  const { id } = req.params;
  const itineraries = await ItineraryModel.find({
    city: mongoose.Types.ObjectId(id)
  }).populate("city", "name");
  res.json(itineraries);
});

app.use("/", router);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
