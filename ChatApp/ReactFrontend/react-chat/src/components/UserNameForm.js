import React, { Component } from 'react';

class UserNameForm extends Component {
  constructor() {
    super();

    this.state = {
      newUserName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      newUserName: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSetUserName(this.state.newUserName);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="add-message-form">
        <input
          onChange={this.handleChange}
          value={this.state.newUserName}
          maxLength={20}
          placeholder="You need a name to chat..."
          type="text" />
        <button type='submit' onClick={this.handleSubmit}>Enter Chat</button>
      </form>
    )
  }
}

export default UserNameForm;