import { takeLatest } from 'redux-saga/effects'

// redux
import { LOGIN, LOGIN_SUCCESS, LOGOUT, REGISTER } from '../redux/authentication'
import { UPDATE_QUEUE_POSITION } from '../redux/queue'

// sagas
import { handleKickedPilot } from './queue'
import { handleLogin, handleLogout, handleRegister } from './authentication'
import { websocket } from './websocket'

export default function * rootSaga () {
  yield takeLatest(UPDATE_QUEUE_POSITION, handleKickedPilot),
  yield takeLatest(LOGIN, handleLogin),
  yield takeLatest(LOGOUT, handleLogout),
  yield takeLatest(LOGIN_SUCCESS, websocket),
  yield takeLatest(REGISTER, handleRegister)
}
