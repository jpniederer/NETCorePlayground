import { getData } from '../../api/api';
import {
  REQUEST_ROOMS_PENDING,
  REQUEST_ROOMS_SUCCESS,
  REQUEST_ROOMS_FAILED,
  SET_ROOM,
  RECEIVE_ROOM
} from './actionTypes';

export const setRoom = (room) => ({ type: SET_ROOM, payload: room })

export const requestRooms = () => (dispatch) => {
  dispatch({ type: REQUEST_ROOMS_PENDING })
  getData('https://chatappwithsignalr.azurewebsites.net/api/chatroom')
  .then(data => dispatch({ type: REQUEST_ROOMS_SUCCESS, payload: data }))
  .catch(error => dispatch({ type: REQUEST_ROOMS_FAILED, payload: error }))
}

export function receiveRoom(
  name = "",
  id = null
) {
  return {
    type: RECEIVE_ROOM,
    payload: {
      room: {
        id,
        name
      }
    }
  }
}