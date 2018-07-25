import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserName } from './store/actions/userActions';

import AddChatRoomForm from './components/AddChatRoomForm';
import AddMessageForm from './components/AddMessageForm';
import ChatRoomList from './components/ChatRoomList';
import UserNameForm from './components/UserNameForm';

import './App.css';

class App extends Component {
  render() {
    const { userName, onSetUserName } = this.props;

    return (
      <div className="App">
        <ChatRoomList
          rooms={[{ id: 1, name: 'Test Room'}]}
          roomId = {1}
          openRoom = {() => 1}
        />
        {
          userName ? <AddMessageForm /> :
          <UserNameForm onSetUserName={onSetUserName} />
        }
        <AddMessageForm />
        <AddChatRoomForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userInfo.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetUserName: (name) => dispatch(setUserName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
