import { CityActionTypes } from 'redux/types';
import axios from 'axios';

export const setFetchingCities = () => ({
	type: CityActionTypes.FETCHING_CITIES
});

/* GET ALL CITIES -> GET /cities/all */
export const getAllCities = () => async dispatch => {
	dispatch(setFetchingCities());
	try {
		const res = await axios.get('/cities/all');
		console.log(res);
		dispatch({
			type: CityActionTypes.GET_ALL_CITIES,
			payload: res.data
		});
	} catch (error) {
		console.log(error);
	}
};
