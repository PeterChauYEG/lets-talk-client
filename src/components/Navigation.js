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
        <button
          className='Navigation-button'
          onClick={() => {
            handleQueue('join')
          }}
        >
          <p>GET IN LINE</p>
        </button>
        <button
          className='Navigation-button'
          onClick={() => push('/leaderboard')}
        >
          <p>LEADERBOARD</p>
        </button>
      </div>
    )
  }
}

export default Navigation
