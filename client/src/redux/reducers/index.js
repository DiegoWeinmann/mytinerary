import { combineReducers } from "redux";
import cityReducer from "./city.reducer";
import itineraryReducer from "./itinerary.reducer";
import activityReducer from "./activity.reducer";

const rootReducer = combineReducers({
  city: cityReducer,
  itinerary: itineraryReducer,
  activity: activityReducer
});

export default rootReducer;
