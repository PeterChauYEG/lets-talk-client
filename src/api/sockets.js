// socket
import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_WEBSOCKET)
socket.emit('client status', 'connected')

const publishGPIO = direction => socket.emit('gpio', direction)

const subscribeToGPIO = cb => {
  socket.on('gpio', gpioDirection => cb(null, gpioDirection))
}

const subscribeToRobotStatus = cb => {
  socket.on('robot status', robotStatus => cb(null, robotStatus))
}

export { publishGPIO, subscribeToGPIO, subscribeToRobotStatus }
