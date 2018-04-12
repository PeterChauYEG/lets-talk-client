import React, { Component } from 'react'

// styles
import './css/Navigation.css'

class Navigation extends Component {
  componentDidUpdate () {
    const { queue: { position }, push } = this.props

    if (position === 0) {
      push('/race')
    }
  }

  render () {
    const { handleQueue, push } = this.props

    return (
      <div className='Navigation-container'>
        <div className='Navigation-button' onClick={() => handleQueue('join')}>
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
