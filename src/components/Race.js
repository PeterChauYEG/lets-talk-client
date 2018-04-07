import React, { Component } from 'react'

// lib
import { publishGPIO } from '../api/sockets'

// components
import Header from './Header'
import VideoFeed from './VideoFeed'

// styles
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp'
import faAngleDoubleUp from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
import faStop from '@fortawesome/fontawesome-free-solid/faStop'
import './Race.css'

class Race extends Component {
  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown.bind(this))
  }

  handleKeydown (event) {
    let direction

    // map key to direction
    switch (event.key) {
      case ' ':
        direction = 'boost'
        break

      case 'w':
        direction = 'forward'
        break

      case 'd':
        direction = 'right'
        break

      case 'x':
        direction = 'backward'
        break
      case 'a':
        direction = 'left'
        break
      case 's':
      default:
        direction = 'stop'
    }

    // send the keypress event mapped to direction to API
    publishGPIO(direction)
  }

  render () {
    return (
      <div className='Race'>
        <Header />
        <VideoFeed
          className='Race-stream'
          containerClassName='Race-stream-container'
        />
        <div className='Race-control-container-left'>
          <FontAwesomeIcon
            className='Race-icon'
            onClick={() => publishGPIO('forward')}
            icon={faCaretUp}
            size='4x'
          />

          <div className='Race-center-control-container'>
            <FontAwesomeIcon
              className='Race-icon'
              onClick={() => publishGPIO('left')}
              icon={faCaretLeft}
              size='4x'
            />
            <FontAwesomeIcon
              className='Race-icon'
              onClick={() => publishGPIO('stop')}
              icon={faStop}
              size='3x'
            />
            <FontAwesomeIcon
              className='Race-icon'
              onClick={() => publishGPIO('right')}
              icon={faCaretRight}
              size='4x'
            />
          </div>

          <FontAwesomeIcon
            className='Race-icon'
            onClick={() => publishGPIO('backward')}
            icon={faCaretDown}
            size='4x'
          />
        </div>

        <div className='Race-control-container-right'>
          <FontAwesomeIcon
            className='Race-icon'
            onClick={() => publishGPIO('boost')}
            icon={faAngleDoubleUp}
            size='4x'
          />
        </div>
      </div>
    )
  }
}

export default Race
