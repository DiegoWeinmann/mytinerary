import { AuthActionTypes } from 'redux/types';
import axios from 'axios';
import { headers } from 'axios/axios.config';

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
		if (error.message) {
			console.log(error.message);
		}
	}
};

export const login = user => async dispatch => {
	dispatch(setFetchingAuth());
	try {
		const res = await axios.post('/login', { ...user }, headers);
		console.log(res.data);
		if (res.data.success) {
			localStorage.setItem('token', JSON.stringify(res.data.token));
			dispatch({
				type: AuthActionTypes.LOGIN_SUCCESS,
				payload: res.data.token
			});
			dispatch(getAuthenticatedUser());
		}
	} catch (error) {
		console.log(error);
	}
};

export const getAuthenticatedUser = () => async dispatch => {
	console.log('INSIDE GET AUTH USER ACTION');
	console.log(axios.defaults.headers.common['Authorization']);
	try {
		const res = await axios.get('/users/authenticated');
		console.log(res.data);
		dispatch({
			type: AuthActionTypes.GET_AUTHENTICATED_USER_SUCCESS,
			payload: res.data
		});
	} catch (error) {
		console.log(error);
	}
};

export const logout = () => ({
	type: AuthActionTypes.LOGOUT
});
