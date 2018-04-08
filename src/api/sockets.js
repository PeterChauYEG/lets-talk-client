// socket
import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_WEBSOCKET)

socket.on('connect', () => {
  socket.emit('client status', 'connected')
})

const publishQueue = action => socket.emit('queue', action)

const publishGPIO = direction => socket.emit('gpio', direction)

const subscribeToGPIO = cb => {
  socket.on('gpio', gpioDirection => cb(null, gpioDirection))
}

const subscribeToQueue = cb => {
  socket.on('queue', queuePosition => cb(null, queuePosition))
}

const subscribeToRaceTime = cb => {
  socket.on('race time', raceTime => cb(null, raceTime))
}

const subscribeToRobotStatus = cb => {
  socket.on('robot status', robotStatus => cb(null, robotStatus))
}

export {
  publishGPIO,
  publishQueue,
  subscribeToGPIO,
  subscribeToQueue,
  subscribeToRaceTime,
  subscribeToRobotStatus
}
