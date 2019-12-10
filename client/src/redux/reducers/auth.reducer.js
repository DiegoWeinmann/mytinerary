import { AuthActionTypes } from 'redux/types';

const initialState = {
	token: localStorage.getItem('token'),
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
			localStorage.setItem(
				'token',
				JSON.stringify(action.payload.token)
			);
			return {
				...state,
				token: action.payload.token,
				isAuthenticated: true,
				isLoaded: true
			};
		case AuthActionTypes.GET_AUTHENTICATED_USER:
			return {
				...state,
				isLoaded: true,
				user: action.payload
			};
		default:
			return state;
	}
};
