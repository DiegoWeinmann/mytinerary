import { UserActionTypes } from 'redux/types';
import axios from 'axios';
import { headers, setAuthToken } from 'axios/axios.config';

const setFetchingAuth = () => ({
	type: UserActionTypes.FETCHING_AUTH
});

export const register = (user, history) => async dispatch => {
	dispatch(setFetchingAuth());
	try {
		const res = await axios.post(
			'/create-new-account',
			{ ...user },
			headers
		);
		console.log(res.data);
		if (history) {
			history.push('/login');
		}
	} catch (error) {
		console.log(error);
		if (error.message) {
			console.log(error.message);
		}
	}
};

export const login = (user, history) => async dispatch => {
	dispatch(setFetchingAuth());
	try {
		const res = await axios.post('/login', { ...user }, headers);
		console.log(res.data);
		if (res.data.success) {
			localStorage.setItem('token', JSON.stringify(res.data.token));
			dispatch({
				type: UserActionTypes.LOGIN_SUCCESS,
				payload: res.data.token
			});
			dispatch(getAuthenticatedUser());
			history.push('/');
		}
	} catch (error) {
		console.log(error);
	}
};

export const getAuthenticatedUser = history => async dispatch => {
	setAuthToken();
	try {
		const res = await axios.get('/users/authenticated');
		dispatch({
			type: UserActionTypes.GET_AUTHENTICATED_USER_SUCCESS,
			payload: res.data
		});
		if (history) {
			history.push('/');
		}
	} catch (error) {
		console.log(error);
	}
};

export const setGoogleToken = token => ({
	type: UserActionTypes.SET_GOOGLE_TOKEN,
	payload: token
});

export const logout = () => ({
	type: UserActionTypes.LOGOUT
});

export const addItineraryToUserFavs = (userId, itineraryId) => async (
	dispatch,
	getState
) => {
	try {
		await axios.post(
			`/users/${userId}/favourites/${itineraryId}`,
			null,
			headers
		);
		if (!getState().user.user.favItineraries.includes(itineraryId)) {
			dispatch({
				type: UserActionTypes.ADD_ITINERARY_TO_FAVS,
				payload: itineraryId
			});
		} else {
			dispatch({
				type: UserActionTypes.REMOVE_ITINERARY_FROM_FAVS,
				payload: itineraryId
			});
		}
	} catch (error) {
		console.log(error);
	}
};
