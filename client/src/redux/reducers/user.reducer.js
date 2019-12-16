import { UserActionTypes } from 'redux/types';

const initialState = {
	token: JSON.parse(localStorage.getItem('token')),
	isAuthenticated: false,
	isLoaded: true,
	user: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UserActionTypes.FETCHING_AUTH:
			return {
				...state,
				isLoaded: false
			};
		case UserActionTypes.LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload,
				isAuthenticated: true,
				isLoaded: true
			};
		case UserActionTypes.SET_GOOGLE_TOKEN:
			return {
				...state,
				token: action.payload,
				user: null
			};
		case UserActionTypes.GET_AUTHENTICATED_USER_SUCCESS:
			return {
				...state,
				isLoaded: true,
				isAuthenticated: true,
				user: action.payload
			};
		case UserActionTypes.GET_AUTHENTICATED_USER_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				token: null,
				user: null
			};
		case UserActionTypes.LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				token: null,
				user: null
			};
		case UserActionTypes.ADD_ITINERARY_TO_FAVS:
			return {
				...state,
				user: {
					...state.user,
					favItineraries: [
						...state.user.favItineraries,
						action.payload
					]
				}
			};
		case UserActionTypes.REMOVE_ITINERARY_FROM_FAVS:
			return {
				...state,
				user: {
					...state.user,
					favItineraries: state.user.favItineraries.filter(
						itinerary => itinerary !== action.payload
					)
				}
			};
		default:
			return state;
	}
};
