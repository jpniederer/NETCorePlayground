import React from 'react';

const ChatRoom = ({name, peopleInside, selected}) => (
  <div className='{selected ? {} : {}'>
    <h3>{name}</h3>
    <p>{peopleInside}</p>
  </div>
)

export default ChatRoom;