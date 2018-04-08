import React, { Component } from 'react'

// api
import { publishQueue } from '../api/sockets'

// styles
import './Header.css'

class Header extends Component {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { queue: { position }, push, updateQueuePosition } = this.props

    // check if user is the current pilot
    if (position === 0) {
      publishQueue('leave')
      updateQueuePosition('Not in queue')
    }

    push('/')
  }

  renderTitle () {
    const { title } = this.props

    if (title) {
      return <p className='Header-title'>{title}</p>
    }
  }
  render () {
    return (
      <header className='Header-container'>
        <h1 className='Header-site-title' onClick={this.handleClick}>
          MMOR
        </h1>
        {this.renderTitle()}
        {/* <p className="Header-username">Username</p> */}
      </header>
    )
  }
}

export default Header
