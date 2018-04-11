import { fork } from 'redux-saga/effects'

// sagas
// import { initializeGPIO } from './gpio'
import { websocket } from './websocket'

// actions
// import { INITIALIZE_GPIO } from '../redux/gpio'

export default function * rootSaga () {
  // yield takeLatest(INITIALIZE_GPIO, initializeGPIO)
  yield fork(websocket)
}
