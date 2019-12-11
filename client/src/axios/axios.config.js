import axios from 'axios';

export const headers = {
	'Content-Type': 'application/json'
};

export const setAuthToken = token => {
	console.log(token);
	if (token) {
		axios.defaults.headers.common[
			'Authorization'
		] = `Bearer ${JSON.parse(token)}`;
	} else {
		delete axios.defaults.common['Authorization'];
	}
};
