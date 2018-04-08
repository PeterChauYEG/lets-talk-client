import React, { Component } from 'react'

// api
import { publishQueue } from '../api/sockets'

// styles
import './Navigation.css'

class Navigation extends Component {
  componentDidUpdate () {
    const { queue: { position }, push } = this.props

    if (position === 0) {
      push('/race')
    }
  }

  render () {
    const { push } = this.props

    return (
      <div className='Navigation-container'>
        <div className='Navigation-button' onClick={() => publishQueue('join')}>
          Join Queue
        </div>
        <div className='Navigation-button' onClick={() => push('/leaderboard')}>
          Leaderboard
        </div>
      </div>
    )
  }
}

export default Navigation
