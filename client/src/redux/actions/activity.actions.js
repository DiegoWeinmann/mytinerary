import axios from "axios";
import { ActivityActionTypes } from "redux/types";

export const setFetchingActivities = () => ({
  type: ActivityActionTypes.FETCHING_ACTIVITIES
});

export const getAllActivities = itineraryId => async dispatch => {
  dispatch(setFetchingActivities());
  try {
    const res = await axios.get(`/activities/${itineraryId}`);
    dispatch({
      type: ActivityActionTypes.GET_ALL_ACTIVITIES,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
