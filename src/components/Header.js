import React, { Component, Fragment } from 'react'

// container
import RaceTimerContainer from '../containers/RaceTimerContainer'

// styles
import './css/Header.css'

class Header extends Component {
  constructor () {
    super()

    this.state = {
      authOpen: false,
      password: '',
      username: ''
    }

    this.handleAuthClick = this.handleAuthClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
  }

  handleAuthClick () {
    const { authOpen } = this.state

    this.setState({
      authOpen: !authOpen
    })
  }

  handleClick () {
    const { handleQueue, queue: { position }, push } = this.props

    // check if user is the current pilot
    if (position === 0) {
      handleQueue('leave')
    }

    push('/')
  }

  handleLogin (event) {
    event.preventDefault()

    const { password, username } = this.state
    const { loginRequest } = this.props

    loginRequest(username, password)
  }

  handleLogout (event) {
    event.preventDefault()

    const { logoutRequest } = this.props

    logoutRequest()
  }

  handlePasswordChange (event) {
    this.setState({
      password: event.target.value
    })
  }

  handleRaceClass (className) {
    const { router: { location: { pathname } } } = this.props

    let result = className

    // check if null
    if (pathname === '/race') {
      result = result + '-race'
    }

    return result
  }

  handleRegister (event) {
    event.preventDefault()

    const { password, username } = this.state
    const { registerRequest } = this.props

    registerRequest(username, password)
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  renderAuthentication () {
    const { authOpen, username, password } = this.state
    const { authentication } = this.props

    let result = (
      <h1 onClick={this.handleAuthClick} className={this.handleRaceClass('Header-username')}>
        Login
      </h1>
    )

    if (authentication.username) {
      result = (
        <Fragment>
          <h1 className={this.handleRaceClass('Header-username')}>
            {authentication.username}
          </h1>
          <button onClick={this.handleLogout}>Logout</button>
        </Fragment>
      )
    } else if (authOpen) {
      result = (
        <Fragment>
          <button onClick={this.handleAuthClick}>Exit</button>
          <input type='text' name={username} onChange={this.handleUsernameChange} />
          <input type='password' name={password} onChange={this.handlePasswordChange} />
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </Fragment>
      )
    }

    return result
  }

  renderRaceTimer () {
    const { router: { location: { pathname } } } = this.props

    if (pathname === '/race') {
      return (
        <RaceTimerContainer
          className={this.handleRaceClass('Header-race-timer')}
        />
      )
    }
  }

  renderTitle () {
    const { title } = this.props

    if (title) {
      return <h1 className='Header-title'>{title}</h1>
    }
  }

  render () {
    return (
      <header className='Header-container'>
        <h1
          className={this.handleRaceClass('Header-site-title')}
          onClick={this.handleClick}
        >
          Lets Talk
        </h1>
        {this.renderTitle()}
        {this.renderRaceTimer()}
        <div className={'Header-authentication'}>
          {this.renderAuthentication()}
        </div>
      </header>
    )
  }
}

export default Header
