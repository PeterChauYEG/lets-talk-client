// socket
import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_WEBSOCKET)

const subscribeToRobotStatus = (cb) => {
  socket.on('robot status', robotStatus => cb(null, robotStatus))
}

export {
  subscribeToRobotStatus
}
