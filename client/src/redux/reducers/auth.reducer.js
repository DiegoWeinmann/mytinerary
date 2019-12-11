import { AuthActionTypes } from 'redux/types';

const initialState = {
	token: JSON.parse(localStorage.getItem('token')),
	isAuthenticated: false,
	isLoaded: true,
	user: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AuthActionTypes.FETCHING_AUTH:
			return {
				...state,
				isLoaded: false
			};
		case AuthActionTypes.LOGIN_SUCCESS:
			console.log('LOGIN_SUCCESS');
			console.log('LOGIN SUCCESS PAYLOAD');
			console.log(action.payload);
			return {
				...state,
				token: action.payload,
				isAuthenticated: true,
				isLoaded: true
			};
		case AuthActionTypes.GET_AUTHENTICATED_USER_SUCCESS:
			console.log('GET AUTH USER');
			console.log(action.payload);
			return {
				...state,
				isLoaded: true,
				isAuthenticated: true,
				user: action.payload
			};
		case AuthActionTypes.GET_AUTHENTICATED_USER_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				token: null,
				user: null
			};
		case AuthActionTypes.LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				token: null,
				user: null
			};
		default:
			return state;
	}
};
