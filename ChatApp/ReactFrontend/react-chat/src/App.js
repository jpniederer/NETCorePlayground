import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserName } from './store/actions/userActions';

import AddChatRoomForm from './components/AddChatRoomForm';
import AddMessageForm from './components/AddMessageForm';
import ChatRoomList from './components/ChatRoomList';
import MessageList from './components/MessageList';
import UserNameForm from './components/UserNameForm';
import NoRoomSelected from './components/NoRoomSelected';

import './App.css';

class App extends Component {
  render() {
    const { userName, onSetUserName, currentRoom } = this.props;

    return (
      <div className="App">
        <ChatRoomList
          openRoom = {() => 1}
        />
        {
          currentRoom ? <MessageList roomId={currentRoom.id} /> :
          <NoRoomSelected />
        }
        {
          userName ? <AddMessageForm /> :
          <UserNameForm onSetUserName={onSetUserName} />
        }
        <AddChatRoomForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userInfo.userName,
    currentRoom: state.requestRooms.currentRoom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetUserName: (name) => dispatch(setUserName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
