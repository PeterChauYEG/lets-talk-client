export const publishQueue = action => {} // socket.emit('queue', action)

export const publishGPIO = direction => {} // socket.emit('gpio', direction)

export const subscribeToGPIO = cb => {
  // socket.on('gpio', gpioDirection => cb(null, gpioDirection))
}

export const subscribeToQueue = (socket, cb) => {
  socket.on('queue', queuePosition => cb(null, queuePosition))
}

export const subscribeToRaceTime = cb => {
  // socket.on('race time', raceTime => cb(null, raceTime))
}

export const subscribeToRobotStatus = cb => {
  // socket.on('robot status', robotStatus => cb(null, robotStatus))
}
