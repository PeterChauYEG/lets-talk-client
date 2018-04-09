// redux
import { createStore, combineReducers, applyMiddleware } from 'redux'

// navigation
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import gpio from './gpio'
import queue from './queue'

// Create a history
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// combine our reducers into 1
const reducers = combineReducers({
  gpio,
  queue,
  router: routerReducer
})

// Add the reducer to your store on the 'router' key
// Also apply our middleware for navigating
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(middleware))
)
