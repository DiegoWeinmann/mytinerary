import axios from "axios";
import { ItineraryActionTypes } from "redux/types";

export const setFetchingItineraries = () => ({
  type: ItineraryActionTypes.FETCHING_ITINERARIES
});

export const getAllItineraries = cityId => async dispatch => {
  dispatch(setFetchingItineraries());
  try {
    const res = await axios.get(`/cities/${cityId}/mytineraries/all`);
    console.log(res);
    dispatch({
      type: ItineraryActionTypes.GET_ALL_ITINERARIES,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
