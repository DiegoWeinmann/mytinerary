import { CityActionTypes } from 'redux/types';

const initialState = {
	cities: []
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CityActionTypes.GET_ALL_CITIES:
			return {
				...state,
				cities: [...payload]
			};
		default:
			return state;
	}
};
