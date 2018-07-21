import {
  REQUEST_MESSAGES_PENDING,
  REQUEST_MESSAGES_SUCCESS,
  REQUEST_MESSAGES_FAILED,
  ADD_MESSAGE,
  RECEIVE_MESSAGE
} from '../actions/actionTypes';

const initialState = {
  messages: [],
  currentRoomId: null
}

export const requestMessages =  (state = initialState, action={}) => {
  switch (action.type) {
    case REQUEST_MESSAGES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_MESSAGES_SUCCESS:
      return Object.assign({}, state, { messages: action.payload, isPending: false });
    case REQUEST_MESSAGES_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}