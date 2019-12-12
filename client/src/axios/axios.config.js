import axios from 'axios';

export const headers = {
  'Content-Type': 'application/json'
};

export const setAuthToken = (token = localStorage.getItem('token')) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
      token
    )}`;
  } else {
    delete axios.defaults.common['Authorization'];
  }
};
