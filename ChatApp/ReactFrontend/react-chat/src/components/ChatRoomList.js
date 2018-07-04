import React, {Component} from 'react';

class ChatRoomList extends Component {
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
                    onClick={() => this.props.openRoom(room.id)} href="#">
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

export default ChatRoomList;