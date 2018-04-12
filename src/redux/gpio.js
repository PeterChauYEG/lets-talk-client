// actions
const HANDLE_GPIO = 'HANDLE_GPIO'
const UPDATE_GPIO = 'UPDATE_GPIO'

// action creators
export function handleGPIO (command) {
  return {
    type: HANDLE_GPIO,
    command
  }
}

export function updateGPIO (command) {
  return {
    type: UPDATE_GPIO,
    command
  }
}

// initialState
const initialState = {
  command: null
}

// reducers
function gpio (state = initialState, action) {
  switch (action.type) {
    case UPDATE_GPIO:
      return {
        ...state,
        command: action.command
      }
    default:
      return state
  }
}

export default gpio
