import { call, put } from 'redux-saga/effects'

// redux
import { loginSuccess } from '../redux/authentication'

export function * handleLogin (action) {
  const { username, password } = action
  const data = { username, password }

  try {
    const response = yield call(login, data)

    if (response === username) {
      yield put(loginSuccess(username))
    }
  } catch (e) {
    console.log(e)
  }
}

export function * handleLogout () {
  try {
    yield call(logout)
  } catch (e) {
    console.log(e)
  }
}

export function * handleRegister (action) {
  const { username, password } = action
  const data = { username, password }

  try {
    const response = yield call(register, data)

    if (response === username) {
      yield put(loginSuccess(username))
    }
  } catch (e) {
    console.log(e)
  }
}

const login = (data) => {
  const options = {
    body: JSON.stringify(data),
    credentials: 'same-origin',
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
    credentials: 'include',
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

const register = (data) => {
  const options = {
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'POST'
  }

  return fetch(`${process.env.REACT_APP_API}/register`, options)
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
