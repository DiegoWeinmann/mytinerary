import { combineReducers } from "redux";
import cityReducer from "./city.reducer";
import itineraryReducer from "./itinerary.reducer";

const rootReducer = combineReducers({
  city: cityReducer,
  itinerary: itineraryReducer
});

export default rootReducer;
