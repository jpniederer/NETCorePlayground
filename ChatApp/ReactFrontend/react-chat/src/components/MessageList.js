import React, { Component } from "react";
import { connect } from "react-redux";
import {
  receiveMessage,
  requestMessages
} from "../store/actions/messageActions";
import Message from "./Message";
import { HubConnection } from "@aspnet/signalr";

class MessageList extends Component {
  componentDidMount() {
    if (this.props.currentRoom) {
      this.props.onRequestMessages(this.props.currentRoom.id);
    }
    this.props.onRequestMessages(this.props.roomId);
  }

  render() {
    // this.props.connection.on(
    //   "ReceiveMessage",
    //   (user, message, roomId, messageId, postedAt) => {
    //     this.props.onReceiveMessage(
    //       user,
    //       message,
    //       roomId,
    //       messageId,
    //       postedAt,
    //       this.props.roomId
    //     );
    //   }
    // );

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
