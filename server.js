const express = require("express");
const app = express();
const router = express.Router();
/* database connection */
const mongoose = require("mongoose");
require("./config/db");
/* models */
const CityModel = require("./models/City");
const ItineraryModel = require("./models/Itinerary");
const ActivityModel = require("./models/Activity");

const port = process.env.PORT || 5000;

/* static content */
app.use(express.static("public"));

/* GET /cities/all */
router
  .route("/cities/all")
  .get(async (req, res) => {
    try {
      const cities = await CityModel.find();
      return res.json(cities);
    } catch (error) {
      console.log(error);
      return res.json({ msg: error.message });
    }
  });

/* GET /cities/:id/mytineraries/all */
router
  .route("/cities/:id/mytineraries/all")
  .get(async (req, res) => {
    const id = req.params.id;
    try {
      const itineraries = await ItineraryModel.find({
        city: mongoose.Types.ObjectId(id)
      }).populate("city", "name");
      res.json(itineraries);
    } catch (error) {
      console.error(error);
    }
  });

/* GET /activities/itineraryId */
router
  .route("/activities/:itineraryId")
  .get(async (req, res) => {
    const itineraryId = req.params.itineraryId;
    console.log(itineraryId);
    try {
      const activities = await ActivityModel.find({
      });
      console.log(activities);
      res.json(activities);
    } catch (error) {
      console.log(error);
    }
  })

app.use("/", router);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
