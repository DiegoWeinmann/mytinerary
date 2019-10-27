import { combineReducers } from 'redux';
import cityReducer from './city.reducer';

export default combineReducers({
	city: cityReducer
});
