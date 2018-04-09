// actions
const UPDATE_GPIO = 'UPDATE_GPIO'

// action creators
export function updateGPIO (direction) {
  return {
    type: UPDATE_GPIO,
    direction
  }
}

// initialState
const initialState = {
  direction: null
}

// reducers
function gpio (state = initialState, action) {
  switch (action.type) {
    case UPDATE_GPIO:
      return {
        ...state,
        direction: action.direction
      }
    default:
      return state
  }
}

export default gpio
