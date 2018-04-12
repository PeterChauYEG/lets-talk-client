export const publishQueue = action => {} // socket.emit('queue', action)

export const publishGPIO = direction => {} // socket.emit('gpio', direction)

export const subscribeToRaceTime = cb => {
  // socket.on('race time', raceTime => cb(null, raceTime))
}
