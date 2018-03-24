import React from 'react';
import ReactDOM from 'react-dom';

// state management
import { store, history } from './redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router'

// navigation
import { ConnectedRouter } from 'react-router-redux'

// service
import registerServiceWorker from './registerServiceWorker';

// styles
import './index.css';

// components
import Home from './components/Home';
import Race from './components/Race';
import Leaderboard from './components/Leaderboard';

// create provider component
const AppProvider = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/race" component={Race} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </div>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(AppProvider, document.getElementById('root'));
registerServiceWorker();
