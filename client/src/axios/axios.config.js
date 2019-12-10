import axios from 'axios';

export const headers = {
	'Content-Type': 'application/json'
};

export const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common[
			'Authorization'
		] = `Bearer ${token}`;
	} else {
		delete axios.defaults.common['Authorization'];
	}
};
