import React, { Component } from 'react'

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
