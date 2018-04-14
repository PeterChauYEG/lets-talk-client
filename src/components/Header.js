import React, { Component } from 'react'

// container
import RaceTimerContainer from '../containers/RaceTimerContainer'

// styles
import './css/Header.css'

class Header extends Component {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { handleQueue, queue: { position }, push } = this.props

    // check if user is the current pilot
    if (position === 0) {
      handleQueue('leave')
    }

    push('/')
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

  renderRaceTimer () {
    const { router: { location: { pathname } } } = this.props

    if (pathname === '/race') {
      return <RaceTimerContainer className={this.handleRaceClass('Header-race-timer')} />
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
        <h1 className={this.handleRaceClass('Header-site-title')} onClick={this.handleClick}>
          Lets Talk
        </h1>
        {this.renderTitle()}
        {this.renderRaceTimer()}
        <h1 className={this.handleRaceClass('Header-username')}>Username</h1>
      </header>
    )
  }
}

export default Header
