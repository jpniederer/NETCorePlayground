import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestRooms, setRoom } from '../store/actions/roomActions';

class ChatRoomList extends Component {
  componentDidMount() {
    this.props.onRequestRooms();
  }

  render() {
    return (
      <div className="rooms-list">
        <ul>
          <h3>Rooms Available</h3>
            {this.props.rooms.map(room => {
              const active = room.id === this.props.roomId ? 'active' : '';
              return (
                <li key={room.id} className={'room + {active}'}>
                  <a
                    onClick={() => this.props.onSetRoom(room)} href="#">
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
    onSetRoom: (room) => dispatch(setRoom(room))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomList);