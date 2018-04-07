import React, { Component } from 'react'

// redux
import { store } from '../redux'

// navigation
import { push } from 'react-router-redux'

// api
import { publishQueue, subscribeToQueue } from '../api/sockets'

// styles
import './Navigation.css'

class Navigation extends Component {
  constructor () {
    super()

    this.state = {
      queuePosition: 'Not in Queue'
    }

    subscribeToQueue((err, queuePosition) => {
      if (err) {
        console.log('error: ' + err)
        return
      }
      this.setState({
        queuePosition
      })
    })
  }

  componentDidUpdate () {
    const { queuePosition } = this.state

    if (queuePosition === 0) {
      store.dispatch(push('/race'))
    }
  }

  handleJoinQueue () {
    publishQueue('join')
  }

  render () {
    return (
      <div className='Navigation-container'>
        <div className='Navigation-button' onClick={this.handleJoinQueue}>
          Join Queue
        </div>
        <div
          className='Navigation-button'
          onClick={() => store.dispatch(push('/leaderboard'))}
        >
          Leaderboard
        </div>
      </div>
    )
  }
}

export default Navigation
