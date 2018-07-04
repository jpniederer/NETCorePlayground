import React, { Component } from 'react';
import './App.css';
import AddChatRoomForm from './components/AddChatRoomForm';
import AddMessageForm from './components/AddMessageForm';
import ChatRoomList from './components/ChatRoomList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatRoomList
          rooms={[{ id: 1, name: 'Test Room'}]}
          roomId = {1}
          openRoom = {() => 1}
        />
        <AddMessageForm />
        <AddChatRoomForm />
      </div>
    );
  }
}

export default App;
