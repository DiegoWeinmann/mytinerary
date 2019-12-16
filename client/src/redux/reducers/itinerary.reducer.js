import { ItineraryActionTypes } from 'redux/types';

const initialState = {
	itineraries: [],
	isLoaded: true
};

export default (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case ItineraryActionTypes.GET_ALL_ITINERARIES:
			return {
				...state,
				itineraries: [...payload],
				isLoaded: true
			};
		case ItineraryActionTypes.FETCHING_ITINERARIES:
			return {
				...state,
				isLoaded: false
			};
		default:
			return state;
	}
};
