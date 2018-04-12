import { fork } from 'redux-saga/effects'

// sagas
import { websocket } from './websocket'

export default function * rootSaga () {
  yield fork(websocket)
}
