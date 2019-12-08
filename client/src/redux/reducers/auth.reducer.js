import { AuthActionTypes } from 'redux/types';

const initialState = {
  user: {
  
  },
  isLoaded: false
}

export default (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}
