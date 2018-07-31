import { getData } from '../../api/api';
import {
  REQUEST_MESSAGES_PENDING,
  REQUEST_MESSAGES_SUCCESS,
  REQUEST_MESSAGES_FAILED
} from './actionTypes';

const baseUrl = 'https://chatappwithsignalr.azurewebsites.net/api/message';

export const requestMessages = (roomId = '') => (dispatch) => {
  const url = roomId ? `${baseUrl}/${roomId}` : baseUrl;
  dispatch({ type: REQUEST_MESSAGES_PENDING })
  getData(url)
  .then(data => dispatch({ type: REQUEST_MESSAGES_SUCCESS, payload: data}))
  .catch(error => dispatch({ type: REQUEST_MESSAGES_FAILED, payload: error }))
}