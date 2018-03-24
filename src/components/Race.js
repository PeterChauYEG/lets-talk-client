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
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
import './Race.css';

// socket
const socket = io('http://localhost:8080')

class Race extends Component {
  handleControl(direction) {
    socket.emit('gpio', direction);
  }

  render() {
    return (
      <div className="Race">
        <header className="Race-header">
          <h1 className="Home-title"
            onClick={() => store.dispatch(push('/'))}>
            MMOR
          </h1>
          <p className="Race-time">
            Race Time: 00:00
          </p>
          <p className="Race-username">Username</p>
        </header>
        <div className="Race-stream-container">
          <img className="Race-stream"
            src="http://via.placeholder.com/500x500"
            alt="stream" />
        </div>
        <div className="Race-left-control-container">
          <FontAwesomeIcon
            onClick={() => this.handleControl('forward')}
            icon={faCaretUp}
            size="4x" />
          <FontAwesomeIcon
            onClick={() => this.handleControl('backward')}
            icon={faCaretDown}
            size="4x" />
        </div>
        <div className="Race-right-control-container">
          <FontAwesomeIcon
            onClick={() => this.handleControl('left')}
            icon={faCaretLeft}
            size="4x" />
          <FontAwesomeIcon
            onClick={() => this.handleControl('right')}
            icon={faCaretRight}
            size="4x" />
        </div>
      </div>
    );
  }
}

export default Race;
