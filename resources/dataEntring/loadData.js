const { loadCityData } = require("./cities/citiesDataLoader");
const { loadItineraryData } = require("./itineraries/itineraryDataLoader");
const { loadActivityData } = require("./activities/activityDataLoader");

const loadData = async () => {
  // await loadCityData();
  // await loadItineraryData();
  await loadActivityData();
};

loadData();
