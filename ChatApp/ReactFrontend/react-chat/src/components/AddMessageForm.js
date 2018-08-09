import React, { Component } from "react";

class AddMessageForm extends Component {
  constructor() {
    super();

    this.state = {
      newMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      newMessage: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.connection
      .invoke(
        "SendMessage",
        this.props.roomId,
        this.props.userName,
        this.state.newMessage
      )
      .catch(err => console.error(err.toString()));

    this.setState({
      newMessage: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-message-form">
        <input
          onChange={this.handleChange}
          value={this.state.newMessage}
          placeholder="Say something to the room..."
          type="text"
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddMessageForm;
