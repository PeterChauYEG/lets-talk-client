// api
import { publishGPIO } from '../api/sockets'

const handleKeydown = event => {
  let direction

  // map key to direction
  switch (event.key) {
    case ' ':
      direction = 'boost'
      break
    case 'w':
      direction = 'forward'
      break
    case 'd':
      direction = 'right'
      break
    case 'x':
      direction = 'backward'
      break
    case 'a':
      direction = 'left'
      break
    case 's':
    default:
      direction = 'stop'
  }

  // send the keypress event mapped to direction to API
  publishGPIO(direction)
}

export { handleKeydown }
