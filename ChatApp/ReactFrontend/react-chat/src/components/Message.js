import React from 'react';
import { getDateString } from '../utils';

const Message = props => {
  return (
    <div className="message">
      <div className="message-username">{props.userName} ~ <b>{getDateString(props.postedAt)}</b></div>
      <div className="message-text">{props.contents}</div>
    </div>
  )
}

export default Message;