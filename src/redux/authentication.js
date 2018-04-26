// actions
export const LOGIN = 'LOGIN'

// action creators
export function loginRequest (username, password) {
  return {
    type: LOGIN,
    username,
    password
  }
}

// initialState
const initialState = {}

// reducers
function login (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state
      }
    default:
      return state
  }
}

export default login
