import React, { Component } from 'react'

// lib
import { handleKeydown } from '../lib/robot'

// api
import { publishQueue } from '../api/sockets'

// components
import GPIOControlContainer from '../containers/GPIOControlContainer'
import HeaderContainer from '../containers/HeaderContainer'
import VideoFeed from './VideoFeed'

// styles
import './css/Race.css'

class Race extends Component {
  componentWillMount () {
    const { queue: { position }, push } = this.props

    // check if user is the current pilot
    if (position === 0) {
      return
    }

    push('/')
  }

  componentDidMount () {
    document.addEventListener('keydown', handleKeydown.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', handleKeydown.bind(this))

    publishQueue('leave')
  }

  render () {
    return (
      <div className='Race'>
        <HeaderContainer />
        <VideoFeed
          className='Race-stream'
          containerClassName='Race-stream-container'
        />
        <GPIOControlContainer />
      </div>
    )
  }
}

export default Race
