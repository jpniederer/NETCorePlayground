import React from 'react';

const Message = props => {
  return (
    <div className="message">
      <div className="message-username">{props.userName}</div>
      <div className="message-text">{props.contents}</div>
      <div className="message-text">{props.postedAt}</div>
    </div>
  )
}

export default Message;