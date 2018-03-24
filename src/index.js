import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Race from './Race';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Race />, document.getElementById('root'));
registerServiceWorker();
