import React, { Component } from 'react'

// lib
import { handleKey } from '../lib/robot'

// components
import GPIOControl from './GPIOControl'
import HeaderContainer from '../containers/HeaderContainer'
import VideoFeed from './VideoFeed'

// styles
import './css/Race.css'

class Race extends Component {
  constructor () {
    super()

    this.handleKeydown = this.handleKeydown.bind(this)
  }

  componentWillMount () {
    const { queue: { position }, push } = this.props

    // check if user is the current pilot
    if (position === 0) {
      return
    }

    push('/')
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown (event) {
    const { handleGPIO } = this.props
    const { key } = event

    const direction = handleKey(key)
    handleGPIO(direction)
  }

  render () {
    return (
      <div className='Race'>
        <HeaderContainer />
        <VideoFeed
          className='Race-stream'
          containerClassName='Race-stream-container'
        />
        <GPIOControl />
      </div>
    )
  }
}

export default Race
