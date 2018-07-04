import React, { Component } from 'react';

class AddChatRoomForm extends Component {
  constructor() {
    super();

    this.state = {
      roomName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      roomName: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // Need to handle adding the Chat Room
    this.setState({
      roomName: ''
    });
    console.log(this.state.roomName);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="new-room-form">
        <input
          onChange={this.handleChange}
          value={this.state.roomName}
          placeholder="Enter the room name..."
          type="text" 
          required 
        />
        <button type='submit' id="create-room-btn" onClick={this.handleSubmit}
        >Submit</button>
        <button type='button' onClick={this.props.cancelRoom}>Cancel</button>
      </form>
    )
  }
}

export default AddChatRoomForm;