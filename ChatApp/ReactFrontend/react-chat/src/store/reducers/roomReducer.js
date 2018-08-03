import {
  REQUEST_ROOMS_PENDING,
  REQUEST_ROOMS_SUCCESS,
  REQUEST_ROOMS_FAILED,
  RECEIVE_ROOM,
  SET_ROOM
} from '../actions/actionTypes';

const initialState = {
  rooms: [],
  currentRoom: null
}

export const requestRooms =  (state = initialState, action={}) => {
  switch (action.type) {
    case REQUEST_ROOMS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROOMS_SUCCESS:
      return Object.assign({}, state, { rooms: action.payload, isPending: false });
    case REQUEST_ROOMS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    case RECEIVE_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.payload.room]
      };
    case SET_ROOM:
      return {
        ...state,
        currentRoom: action.payload
      }
    default:
      return state;
  }
}