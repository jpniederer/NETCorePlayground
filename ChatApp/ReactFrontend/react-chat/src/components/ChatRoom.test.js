import React from 'react';
import ReactDOM from 'react-dom';
import ChatRoom from './ChatRoom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatRoom />, div);
  ReactDOM.unmountComponentAtNode(div);
});