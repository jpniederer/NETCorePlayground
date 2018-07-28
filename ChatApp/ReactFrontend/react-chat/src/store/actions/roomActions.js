import { getData } from '../../api/api';
import {
  REQUEST_ROOMS_PENDING,
  REQUEST_ROOMS_SUCCESS,
  REQUEST_ROOMS_FAILED
} from './actionTypes';

export const requestRooms = () => (dispatch) => {
  dispatch({ type: REQUEST_ROOMS_PENDING})
  getData('https://chatappwithsignalr.azurewebsites.net/api/chatroom')
  .then(data => dispatch({ type: REQUEST_ROOMS_SUCCESS, payload: data }))
  .catch(error => dispatch({ type: REQUEST_ROOMS_FAILED, payload: error }))
}