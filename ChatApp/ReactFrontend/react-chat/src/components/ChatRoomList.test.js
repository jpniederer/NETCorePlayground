import React from 'react';
import ReactDOM from 'react-dom';
import ChatRoomList from './ChatRoomList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatRoomList rooms={[]} store={{room: []}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});