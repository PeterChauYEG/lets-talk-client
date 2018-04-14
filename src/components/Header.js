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
      return <h1 className='Header-title'>{title}</h1>
    }
  }

  render () {
    return (
      <header className='Header-container'>
        <h1 className='Header-site-title' onClick={this.handleClick}>
          Lets Talk
        </h1>
        {this.renderTitle()}
        <h1 className='Header-username'>Username</h1>
      </header>
    )
  }
}

export default Header
