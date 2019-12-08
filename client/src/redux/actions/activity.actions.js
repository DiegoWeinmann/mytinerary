import axios from 'axios';
import { ActivityActionTypes } from 'redux/types';

export const setFetchingActivities = itineraryId => {
	return {
		type: ActivityActionTypes.FETCHING_ACTIVITIES,
		payload: {
			itineraryId
		}
	};
};

export const getAllActivities = itineraryId => async dispatch => {
	console.log(itineraryId);
	dispatch(setFetchingActivities(itineraryId));
	try {
		const res = await axios.get(`/activities/${itineraryId}`);
		dispatch({
			type: ActivityActionTypes.GET_ALL_ACTIVITIES,
			payload: {
				itineraryId,
				activities: res.data
			}
		});
	} catch (error) {
		console.log(error);
	}
};
