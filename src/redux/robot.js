// actions
const UPDATE_ROBOT_STATUS = 'UPDATE_ROBOT_STATUS'

// action creators
export function updateRobotStatus (status) {
  return {
    type: UPDATE_ROBOT_STATUS,
    status
  }
}

// initialState
const initialState = {
  status: 'Unknown'
}

// reducers
function robot (state = initialState, action) {
  switch (action.type) {
    case UPDATE_ROBOT_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}

export default robot
