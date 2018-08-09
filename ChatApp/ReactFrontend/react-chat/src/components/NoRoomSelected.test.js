import React from 'react';
import ReactDOM from 'react-dom';
import NoRoomSelected from './NoRoomSelected';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoRoomSelected />, div);
  ReactDOM.unmountComponentAtNode(div);
});