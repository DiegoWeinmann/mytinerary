import axios from 'axios';
import { ActivityActionTypes } from 'redux/types';

export const setFetchingActivities = () => ({
	type: ActivityActionTypes.FETCHING_ACTIVITIES
});

export const getAllActivities = itineraryId => async dispatch => {
	dispatch(setFetchingActivities());
	try {
		const res = await axios.get(`/activities/${itineraryId}`);
		console.log(res.data);
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
