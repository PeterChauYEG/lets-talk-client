// actions
const UPDATE_QUEUE_POSITION = 'UPDATE_QUEUE_POSITION'

// action creators
export function updateQueuePosition (position) {
  return {
    type: UPDATE_QUEUE_POSITION,
    position
  }
}

// initialState
const initialState = {
  position: 'Not in queue'
}

// reducers
function queue (state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUEUE_POSITION:
      return {
        ...state,
        position: action.position
      }
    default:
      return state
  }
}

export default queue
