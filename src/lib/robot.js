const handleKey = key => {
  let direction

  // map key to direction
  switch (key) {
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

  return direction
}

export { handleKey }
