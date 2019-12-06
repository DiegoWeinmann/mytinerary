const express = require("express");
const app = express();
const router = express.Router();
/* database connection */
const mongoose = require("mongoose");
require("./config/db");
const bcrypt = require("bcryptjs");
/*  models */
const CityModel = require("./models/City");
const ItineraryModel = require("./models/Itinerary");
const ActivityModel = require("./models/Activity");
const UserModel = require("./models/User");

const port = process.env.PORT || 5000;

/* static content */
app.use(express.static("public"));
app.use(express.json());

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
router.route("/cities/:id/mytineraries/all").get(async (req, res) => {
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
router.route("/activities/:itineraryId").get(async (req, res) => {
  const itineraryId = req.params.itineraryId;
  try {
    const activities = await ActivityModel.find({
      itinerary: itineraryId
    }).populate("itinerary");
    res.json(activities);
  } catch (error) {
    console.log(error);
  }
});

/* POST /create-new-account */
router.route("/create-new-account").post(async (req, res) => {
  const { email, password, profilePic } = req.body;
  console.log(email);
  console.log(password);
  try {
    let user = UserModel.findOne({
      email
    });

    if (!user) {
      return res.status(403).json({ message: "User already exists" });
    }

    user = new UserModel();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);

    if (email) user.email = email;
    if (hashedPassword) user.password = hashedPassword;
    if (profilePic) user.profilePic = profilePic;

    await user.save();

    return res.status(401).json({ message: "User created", user: user });
  } catch (err) {
    console.log(err);
  }
});

app.use("/", router);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
