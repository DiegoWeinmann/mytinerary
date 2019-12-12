import { AuthActionTypes } from 'redux/types';
import axios from 'axios';
import { headers, setAuthToken } from 'axios/axios.config';

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
        type: AuthActionTypes.LOGIN_SUCCESS,
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
    console.log(res.data);
    dispatch({
      type: AuthActionTypes.GET_AUTHENTICATED_USER_SUCCESS,
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
  type: AuthActionTypes.SET_GOOGLE_TOKEN,
  payload: token
});

export const logout = () => ({
  type: AuthActionTypes.LOGOUT
});
