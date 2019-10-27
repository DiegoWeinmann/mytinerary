import { CityActionTypes } from 'redux/types';

const initialState = {
	cities: [],
	filteredCities: [],
	search: '',
	isLoaded: true
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CityActionTypes.GET_ALL_CITIES:
			return {
				...state,
				cities: [...payload],
				isLoaded: true
			};
		case CityActionTypes.FETCHING_CITIES:
			return {
				...state,
				isLoaded: false
			};
		case CityActionTypes.SEARCH_CITIES:
			return {
				...state,
				filteredCities: state.cities.filter(city => {
					if (payload === '') return true;
					const regExp = new RegExp(`^(${payload})+\\w`, 'i');
					return regExp.test(city.name);
				}),
				search: payload
			};
		default:
			return state;
	}
};
