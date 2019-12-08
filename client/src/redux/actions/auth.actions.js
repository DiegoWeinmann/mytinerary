import { AuthActionTypes } from 'redux/types';
import axios from 'axios';
import { headers } from 'axios/axios.config';

const setFetchingAuth = () => ({
	type: AuthActionTypes.FETCHING_AUTH
});

export const register = user => async dispatch => {
	dispatch(setFetchingAuth());
	try {
		const res = await axios.post('/create-new-account', { ...user }, headers);
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};
