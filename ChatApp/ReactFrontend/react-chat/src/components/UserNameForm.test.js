import React from 'react';
import ReactDOM from 'react-dom';
import UserNameForm from './UserNameForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserNameForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});