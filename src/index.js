import React from 'react'
import ReactDOM from 'react-dom'

// state management
import { store, history } from './redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'

// navigation
import { ConnectedRouter } from 'react-router-redux'

// service
import { unregister } from './registerServiceWorker'

// styles
import './index.css'

// components
import HomeContainer from './containers/HomeContainer'
import RaceContainer from './containers/RaceContainer'
import Leaderboard from './components/Leaderboard'

// create provider component
const AppProvider = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact strict path='/' component={HomeContainer} />
        <Route exact strict path='/race' component={RaceContainer} />
        <Route exact path='/leaderboard' component={Leaderboard} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(AppProvider, document.getElementById('root'))
unregister()
