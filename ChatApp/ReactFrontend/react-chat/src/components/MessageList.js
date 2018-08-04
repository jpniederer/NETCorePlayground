import React, { Component } from "react";
import { connect } from "react-redux";
import {
  receiveMessage,
  requestMessages
} from "../store/actions/messageActions";
import Message from "./Message";

class MessageList extends Component {
  componentDidMount() {
    this.props.connection.on(
      "ReceiveMessage",
      (user, message, roomId, messageId, postedAt) => {
        this.props.onReceiveMessage(
          user,
          message,
          roomId,
          messageId,
          postedAt,
          this.props.currentRoom.id
        );
      }
    );

    this.props.onRequestMessages(this.props.roomId);
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    if (this.props.roomId !== prevProps.roomId) {
      this.props.onRequestMessages(this.props.roomId);
    }
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    if (!this.props.roomId) {
      return (
        <div className="message-list">
          <div className="join-room">Join a room to start chatting.</div>
        </div>
      );
    }
    return (
      <div className="message-list">
        {this.props.messages.map((message, i) => {
          return (
            <Message
              key={i}
              userName={message.userName}
              contents={message.contents}
              postedAt={message.postedAt}
            />
          );
        })}
        <div ref={el => { this.el = el; }} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.requestMessages.messages,
    currentRoom: state.requestRooms.currentRoom
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestMessages: currentRoomId =>
      dispatch(requestMessages(currentRoomId)),
    onReceiveMessage: (
      user,
      message,
      roomId,
      messageId,
      postedAt,
      currentRoomId
    ) =>
      dispatch(
        receiveMessage(
          user,
          message,
          roomId,
          messageId,
          postedAt,
          currentRoomId
        )
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
