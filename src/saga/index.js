import { fork, takeLatest } from 'redux-saga/effects'

// redux
import { LOGIN } from '../redux/authentication'
import { UPDATE_QUEUE_POSITION } from '../redux/queue'

// sagas
import { handleKickedPilot } from './queue'
import { handleLogin } from './authentication'
import { websocket } from './websocket'

export default function * rootSaga () {
  yield takeLatest(UPDATE_QUEUE_POSITION, handleKickedPilot),
  yield takeLatest(LOGIN, handleLogin)
  yield fork(websocket)
}
