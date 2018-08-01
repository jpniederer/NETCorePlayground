import {
  SET_USERNAME
} from '../actions/actionTypes';

export function setUserName(name) {
  return {
    type: SET_USERNAME,
    payload: name
  }
}