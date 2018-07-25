import {
  SET_USERNAME
} from '../actions/actionTypes';

const initialState = {
  userName: ''
}

export const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return Object.assign({}, state, {
        userName: action.payload
      })
    default:
      return state;
  }
}