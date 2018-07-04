import React from 'react';
import ReactDOM from 'react-dom';
import AddMessageForm from './AddMessageForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddMessageForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});