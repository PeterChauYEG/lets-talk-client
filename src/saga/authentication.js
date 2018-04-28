import { call, put, select } from 'redux-saga/effects'

// redux
import { loginSuccess } from '../redux/authentication'

export function * handleLogin (action) {
  const { username, password } = action
  const data = { username, password }

  try {
    const response = yield call(login, data)
    console.log({response})

    if (response === username) {

    }
  } catch (e) {
    console.log(e)
  }
}

export function * handleLogout () {
  try {
    const response = yield call(protectedRoute)
  } catch (e) {
    console.log(e)
  }
}

const login = (data) => {
  const options = {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'POST'
  }

  return fetch(`${process.env.REACT_APP_API}/login`, options)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => data)
    .catch(error => error)
}

const logout = () => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'GET'
  }

  return fetch(`${process.env.REACT_APP_API}/logout`, options)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => data)
    .catch(error => error)
}

const protectedRoute = () => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'GET'
  }

  return fetch(`${process.env.REACT_APP_API}/protected`, options)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => data)
    .catch(error => error)
}

export default handleLogin
