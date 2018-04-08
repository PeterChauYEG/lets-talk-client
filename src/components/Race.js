import React, { Component } from 'react'

// lib
import { handleKeydown } from '../lib/robot'

// api
import { publishQueue } from '../api/sockets'

// components
import GPIOButton from './GPIOButton'
import HeaderContainer from './HeaderContainer'
import VideoFeed from './VideoFeed'

// styles
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp'
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
import faStop from '@fortawesome/fontawesome-free-solid/faStop'
import './Race.css'

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
        <div className='Race-control-container-left'>
          <GPIOButton direction='forward' icon={faCaretUp} size='4x' />

          <div className='Race-center-control-container'>
            <GPIOButton direction='left' icon={faCaretLeft} size='4x' />
            <GPIOButton direction='stop' icon={faStop} size='3x' />
            <GPIOButton direction='right' icon={faCaretRight} size='4x' />
          </div>

          <GPIOButton direction='backward' icon={faCaretDown} size='4x' />
        </div>

        <div className='Race-control-container-right'>
          <GPIOButton direction='boost' icon={faRocket} size='3x' />
        </div>
      </div>
    )
  }
}

export default Race
