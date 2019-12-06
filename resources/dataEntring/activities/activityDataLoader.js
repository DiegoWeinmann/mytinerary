require("../../../config/db");
const mongoose = require("mongoose");

const fs = require("fs");
const path = require("path");

const ItineraryModel = require("../../../models/Itinerary");
const ActivityModel = require("../../../models/Activity");

//lectura de archivo (si se cambia de carpeta, modificar la ruta)
exports.loadActivityData = () => {
  const filePath = path.join(__dirname, "allActivities.json");
  console.log("activity: " + filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) console.log(err);
    const activities = JSON.parse(data);
    console.log(activities.length);
    activities.forEach(async activity => {
      try {
        const itinerary = await ItineraryModel.findOne({
          title: activity.itinerary_title
        }).populate("city");

        if (itinerary) {
          const newActivity = new ActivityModel({
            itinerary: mongoose.Types.ObjectId(itinerary._id),
            city: mongoose.Types.ObjectId(itinerary.city._id),
            details: {
              title: activity.title,
              activityPic: activity.img
            },
            address: activity.address,
            duration: activity.duration,
            price: Number(activity.price),
            sumary: activity.summary,
            comments: ["lorem ipsum", "some comment"]
          });
          await newActivity.save();
          console.log(
            "Activity " + activity.title + " added to " + itinerary.title
          );
        } else {
          console.log(
            activity.itinerary_title +
              " not found, " +
              activity.title +
              " not added"
          );
        }
      } catch (err) {
        console.log(err);
      }
    });
  });
};
