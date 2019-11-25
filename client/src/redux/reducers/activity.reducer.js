import { ActivityActionTypes } from 'redux/types';

const initialState = {
	itinerary: '',
	activities: {},
	isLoaded: true
};

/* 
comments: ["Good"]
details:
activityPic: "#"
title: "Bar del Pla"
__proto__: Object
itinerary:
city: "5db52a8a8e8ba1585ae7bfd1"
duration: 4
hashtag: (2) ["Restaurants", "Food&Drink"]
price: 150
profilePic: "HambreAlumna.png"
rating: 24
title: "Tappa Till YOi Droppa"
__v: 0
_id: "5dcff5d7e5fcf302d98c6c54"
__proto__: Object
__v: 0
_id: "5dd93cd3eadf512310dd293d" */

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ActivityActionTypes.FETCHING_ACTIVITIES:
			return {
				...state,
				isLoaded: false
			};
		case ActivityActionTypes.GET_ALL_ACTIVITIES:
			console.log(state);
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
