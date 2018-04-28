// actions
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

// action creators
export function loginRequest (username, password) {
  return {
    type: LOGIN,
    username,
    password
  }
}

export function loginSuccess (username) {
  return {
    type: LOGIN_SUCCESS,
    username
  }
}

export function logoutRequest () {
  return {
    type: LOGOUT
  }
}

// initialState
const initialState = {
  username: null
}

// reducers
function login (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username
      }
    case LOGOUT:
      return {
        ...state,
        username: null
      }
    default:
      return state
  }
}

export default login
