import React from 'react';
import ReactDOM from 'react-dom';
import AddChatRoomForm from './AddChatRoomForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddChatRoomForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});