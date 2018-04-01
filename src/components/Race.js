import React, { Component } from 'react';

//redux
import { store } from '../redux';

// navigation
import { push } from 'react-router-redux';

// socket
import io from 'socket.io-client'

// styles
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp'
import faAngleDoubleUp from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
import faStop from '@fortawesome/fontawesome-free-solid/faStop'
import './Race.css';

// socket
const socket = io('http://35.185.200.144:8080')
// const socket = io('http://192.168.0.19:8080')
// const socket = io('http://dccb0d04.ngrok.io')
socket.emit('log message', 'client connected');

class Race extends Component {
  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown.bind(this))
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown.bind(this))
  }

  handleKeydown(event) {
    let direction

    // map key to direction
    switch (event.key) {
      case ' ':
        direction = 'boost'
        break;

      case 'w':
        direction = 'forward'
        break;

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
    this.handleControl(direction)
  }

  handleControl(direction) {
    socket.emit('gpio', direction);
  }

  render() {
    return (
      <div className="Race">
        <header className="Race-header">
          <h1 className="Race-title"
            onClick={() => store.dispatch(push('/'))}>
            MMOR
          </h1>
          <p className="Race-time">
            Time: 00:00
          </p>
          <p className="Race-username">Username</p>
        </header>
        <div className="Race-stream-container">
          <img
            className="Race-stream"
            src="http://lets-talk.ngrok.io/test.mjpg"
            alt="stream"
          />
        </div>
        <div className="Race-control-container-left">
          <FontAwesomeIcon
            className="Race-icon"
            onClick={() => this.handleControl('forward')}
            icon={faCaretUp}
            size="4x" />

          <div className="Race-center-control-container">
            <FontAwesomeIcon
              className="Race-icon"
              onClick={() => this.handleControl('left')}
              icon={faCaretLeft}
              size="4x" />
            <FontAwesomeIcon
              className="Race-icon"
              onClick={() => this.handleControl('stop')}
              icon={faStop}
              size="3x" />
            <FontAwesomeIcon
              className="Race-icon"
              onClick={() => this.handleControl('right')}
              icon={faCaretRight}
              size="4x" />
          </div>

          <FontAwesomeIcon
            className="Race-icon"
            onClick={() => this.handleControl('backward')}
            icon={faCaretDown}
            size="4x" />
        </div>

        <div className="Race-control-container-right">
          <FontAwesomeIcon
            className="Race-icon"
            onClick={() => this.handleControl('boost')}
            icon={faAngleDoubleUp}
            size="4x" />
        </div>
      </div>
    );
  }
}

export default Race;
