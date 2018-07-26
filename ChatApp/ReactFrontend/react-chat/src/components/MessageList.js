import React, { Component } from 'react'
import Message from './Message';

export default class MessageList extends Component {
  render() {
    if (!this.props.roomId) {
      return (
        <div className="message-list">
          <div className="join-room">
            Join a room to start chatting.
          </div>        
        </div>
      )   
    }
    return (
      <div className="message-list">
        {this.props.messages.map((message, i) => {
          <Message key={i} username={message.userName} text={message.text} time={message.postedAt} />
        })}
      </div>
    )
  }
}
