import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestRooms, receiveRoom, setRoom } from '../store/actions/roomActions';

class ChatRoomList extends Component {
  componentDidMount() {
    this.props.onRequestRooms();

    this.props.connection.on(
      "NewRoom",
      (roomName, roomId) =>
      {
        this.props.onReceiveRoom(
          roomName,
          roomId
        )
      }
    )
  }

  render() {
    return (
      <div className="rooms-list">
        <ul>
          <h4>Rooms Available</h4>
            {this.props.rooms.map(room => {
              
              return (
                <li key={room.id} className={'room'}>
                  <a
                    onClick={() => this.props.onSetRoom(room)} href="#active">
                    {room.name}
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.requestRooms.rooms,
    currentRoom: state.requestRooms.currentRoom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRooms: () => dispatch(requestRooms()),
    onReceiveRoom: (
      roomName,
      id
    ) =>
      dispatch(
        receiveRoom(
          roomName,
          id
        )
      ),
    onSetRoom: (room) => dispatch(setRoom(room))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomList);