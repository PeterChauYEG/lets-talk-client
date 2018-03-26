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
import faStop from '@fortawesome/fontawesome-free-solid/faStop'
import './Race.css';

// socket
const socket = io('http://192.168.0.19:8080')
// const ss = require('socket.io-stream');

class Race extends Component {
  constructor () {
    super()

    this.state = {
      url: 'http://192.168.0.22:9090/test.mjpg'
    }
  }

  handleControl(direction) {
    socket.emit('gpio', direction);
  }

  render() {
    // socket.on('stream', function(data) {
    //   var url = data
    //   console.log(url)
    //   this.setState({url})
    // })

    // var that = this
    // ss(socket).on('stream', function(stream, data) {
    //     var url = stream
    //     console.log(url)
    //     that.setState({url})
    // })

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
          <img
            className="Race-stream"
            src={this.state.url}
            alt="stream"
          />
        </div>
        <div className="Race-left-control-container">
          <FontAwesomeIcon
            onClick={() => this.handleControl('forward')}
            icon={faCaretUp}
            size="4x" />
          <FontAwesomeIcon
            onClick={() => this.handleControl('stop')}
            icon={faStop}
            size="3x" />
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
