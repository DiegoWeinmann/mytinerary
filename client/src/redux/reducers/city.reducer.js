import { CityActionTypes } from "redux/types";

const initialState = {
  cities: [],
  city: {},
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
    default:
      return state;
  }
};
