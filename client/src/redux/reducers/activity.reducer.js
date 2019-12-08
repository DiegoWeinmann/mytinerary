import { ActivityActionTypes } from 'redux/types';

const initialState = {
	activities: {}
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ActivityActionTypes.FETCHING_ACTIVITIES:
			console.log(payload);
			return {
				...state,
				activities: {
					...state.activities,
					[payload.itineraryId]: {
						activities: [],
						isLoaded: false
					}
				}
			};
		case ActivityActionTypes.GET_ALL_ACTIVITIES:
			return {
				...state,
				activities: {
					...state.activities,
					[payload.itineraryId]: {
						activities: payload.activities,
						isLoaded: true
					}
				}
			};
		default:
			return state;
	}
};
