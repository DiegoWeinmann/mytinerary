import { AuthActionTypes } from 'redux/types';
import axios from 'axios';
import { headers, setAuthToken } from 'axios/axios.config';

const setFetchingAuth = () => ({
	type: AuthActionTypes.FETCHING_AUTH
});

export const register = user => async dispatch => {
	dispatch(setFetchingAuth());
	try {
		const res = await axios.post(
			'/create-new-account',
			{ ...user },
			headers
		);
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};

export const login = user => async dispatch => {
	dispatch(setFetchingAuth());
	try {
		const res = await axios.post('/login', { ...user }, headers);
		console.log(res);
		if (res.data.success) {
			dispatch({
				type: AuthActionTypes.LOGIN_SUCCESS,
				payload: res.data.token
			});
		}
	} catch (error) {}
};

export const getAuthenticatedUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const res = await axios.get('/users/authenticated');
		console.log(res.data);
		dispatch({
			type: AuthActionTypes.GET_AUTHENTICATED_USER,
			dispatch: res.data
		});
	} catch (error) {
		console.log(error);
	}
};
