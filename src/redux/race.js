// actions
const UPDATE_RACE_TIME = 'UPDATE_RACE_TIME'

// action creators
export function updateRaceTime (time) {
  return {
    type: UPDATE_RACE_TIME,
    time
  }
}

// initialState
const initialState = {
  time: 0
}

// reducers
function race (state = initialState, action) {
  switch (action.type) {
    case UPDATE_RACE_TIME:
      return {
        ...state,
        time: action.time
      }
    default:
      return state
  }
}

export default race
