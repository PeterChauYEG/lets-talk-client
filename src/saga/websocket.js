import { eventChannel } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'

// socket
import io from 'socket.io-client'

// redux
import { joinQueue, updateQueuePosition } from '../redux/queue'

function connectToSocket () {
  const socket = io(process.env.REACT_APP_WEBSOCKET)

  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket)
    })
  })
}

function subscribeToSocket (socket) {
  let counter = 'Not in queue'

  return eventChannel(emit => {
    socket.on('queue', position => {
      if (counter !== position) {
        counter = position
        emit(updateQueuePosition(position))
      }
    })

    return () => {}
  })
}

function * read (socket) {
  const channel = yield call(subscribeToSocket, socket)

  while (true) {
    let action = yield take(channel)
    yield put(action)
  }
}

function * write (socket) {
  while (true) {
    const { payload } = yield take(joinQueue)
    socket.emit('queue', 'join')
  }
}

function * handleIO (socket) {
  yield fork(read, socket)
  yield fork(write, socket)
}

export function * websocket () {
  const socket = yield call(connectToSocket)

  // Let the api know that this client has connected
  socket.emit('client status', 'connected')

  const task = yield fork(handleIO, socket)
}

export default websocket
