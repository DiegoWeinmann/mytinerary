const mongoose = require("mongoose");
require("../config/db");
const ActivityModel = require("../models/Activity");

async function createActivityData() {
  const gaudiInADayID = "5dcff5d7e5fcf302d98c6c53";
  const tappaDroppa = "5dcff5d7e5fcf302d98c6c54";

  // Gaudy in a day
  const act1 = ActivityModel({
    itinerary: mongoose.Types.ObjectId(gaudiInADayID),
    details: {
      title: "Casa Battlo",
      activityPic: "#"
    },
    comments: ["Great activity", "Awesome!!!!"]
  });

  const act2 = ActivityModel({
    itinerary: mongoose.Types.ObjectId(gaudiInADayID),
    details: {
      title: "La Pedrera",
      activityPic: "#"
    },
    comments: ["Best time of my life", "Not bad!"]
  });

  const act3 = ActivityModel({
    itinerary: mongoose.Types.ObjectId(gaudiInADayID),
    details: {
      title: "Sagrada Familia",
      activityPic: "#"
    },
    comments: ["Great activity", "Not good enough", "Very expensive"]
  });

  const act4 = ActivityModel({
    itinerary: mongoose.Types.ObjectId(gaudiInADayID),
    details: {
      title: "Park Güell",
      activityPic: "#"
    },
    comments: ["Bad", "Good"]
  });

  // Tapa Till you Droppa
  const act5 = ActivityModel({
    itinerary: mongoose.Types.ObjectId(tappaDroppa),
    details: {
      title: "Bar del Pla",
      activityPic: "#"
    },
    comments: ["Good"]
  });

  const act6 = ActivityModel({
    itinerary: mongoose.Types.ObjectId(tappaDroppa),
    details: {
      title: "Tapas la Bona Sord",
      activityPic: "#"
    },
    comments: ["Very good"]
  });

  const act7 = ActivityModel({
    itinerary: mongoose.Types.ObjectId(tappaDroppa),
    details: {
      title: "Elsa y Fred",
      activityPic: "#"
    },
    comments: ["good"]
  });

  const act8 = ActivityModel({
    itinerary: mongoose.Types.ObjectId(tappaDroppa),
    details: {
      title: "Bar Barcelona",
      activityPic: "#"
    },
    comments: ["Bad"]
  });

  try {
    await ActivityModel.deleteMany({
      itineray: mongoose.Types.ObjectId(gaudiInADayID)
    });
    await ActivityModel.deleteMany({
      itineray: mongoose.Types.ObjectId(tappaDroppa)
    });
    await act1.save();
    await act2.save();
    await act3.save();
    await act4.save();
    await act5.save();
    await act6.save();
    await act7.save();
    await act8.save();
    console.log("Data created succesfully!");
  } catch (error) {
    console.log(error);
  }
}

createActivityData();
