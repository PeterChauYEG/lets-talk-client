import { fork, takeLatest } from 'redux-saga/effects'

// redux
import { UPDATE_QUEUE_POSITION } from '../redux/queue'

// sagas
import { handleKickedPilot } from './queue'
import { websocket } from './websocket'

export default function * rootSaga () {
  yield takeLatest(UPDATE_QUEUE_POSITION, handleKickedPilot)
  yield fork(websocket)
}
