import { CityActionTypes } from 'redux/types';
import axios from 'axios';

export const getAllCities = () => ({
	type: CityActionTypes.GET_ALL_CITIES,
	payload: [{ name: 'Barcelona', country: 'Spain' }]
});
