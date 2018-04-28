import { put, select } from 'redux-saga/effects'

// navigation
import { push } from 'react-router-redux'

export function * handleLogin (action) {
  const { username, password } = action

  const data = {
    username,
    password
  }

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  const options = {
    body: JSON.stringify(data),
    headers,
    method: 'POST'
  }

  fetch(`${process.env.REACT_APP_API}/login`, options)
    .then(response => {
      if (response.ok) {
        console.log({ response })
        return response.json()
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => console.log({data}))
    .catch(error => console.error({error}))
}

export default handleLogin
