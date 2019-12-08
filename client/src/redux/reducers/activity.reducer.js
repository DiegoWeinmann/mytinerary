import { ActivityActionTypes } from 'redux/types';

const initialState = {
	itinerary: '',
	activities: {},
	isLoaded: true
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ActivityActionTypes.FETCHING_ACTIVITIES:
			return {
				...state,
				isLoaded: false
			};
		case ActivityActionTypes.GET_ALL_ACTIVITIES:
			return {
				...state,
				activities: {
					...state.activities,
					[payload.itineraryId]: payload.activities
				},
				isLoaded: true
			};
		default:
			return state;
	}
};
