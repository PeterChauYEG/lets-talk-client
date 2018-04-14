import { put, select } from 'redux-saga/effects'

// navigation
import { push } from 'react-router-redux'

export function * handleKickedPilot (action) {
  const { position } = action

  const time = yield select(state => state.race.time)

  // check if the position
  if (position === 'Not in queue' && time === 10) {
    yield put(push('/'))
  }
}

export default handleKickedPilot
