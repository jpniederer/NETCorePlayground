import React, { Component } from 'react';
import './App.css';
import AddMessageForm from './components/AddMessageForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddMessageForm />
      </div>
    );
  }
}

export default App;
