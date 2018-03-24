import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'

import './Race.css';

class Race extends Component {
  render() {
    return (
      <div className="Race">
        <header className="Race-header">
          <h1 className="Race-title">MMOR</h1>
          <p className="Race-time">
            Race Time: 00:00
          </p>
          <p className="Race-username">Username</p>
        </header>
        <div className="Race-stream-container">
          <img className="Race-stream"
            src="http://via.placeholder.com/500x500" />
        </div>
        <div className="Race-left-control-container">
          <FontAwesomeIcon icon={faCaretUp} size="4x" />
          <FontAwesomeIcon icon={faCaretDown} size="4x" />
        </div>
        <div className="Race-right-control-container">
          <FontAwesomeIcon icon={faCaretLeft} size="4x" />
          <FontAwesomeIcon icon={faCaretRight} size="4x" />
        </div>
      </div>
    );
  }
}

export default Race;
