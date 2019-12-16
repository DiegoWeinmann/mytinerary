import { combineReducers } from 'redux';
import cityReducer from './city.reducer';
import itineraryReducer from './itinerary.reducer';
import activityReducer from './activity.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
	city: cityReducer,
	itinerary: itineraryReducer,
	activity: activityReducer,
	user: userReducer
});

export default rootReducer;
