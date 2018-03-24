// redux
import { createStore, combineReducers, applyMiddleware } from 'redux'

// navigation
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

// reducers
// import reducers from './reducers'

// Create a history
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the 'router' key
// Also apply our middleware for navigating
export const store = createStore(
  combineReducers({
    // ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)
