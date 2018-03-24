import React from 'react';
import ReactDOM from 'react-dom';
import Leader from './Leader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Leader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
