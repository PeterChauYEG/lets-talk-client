import React, { Component } from 'react';

// socket
import { subscribeToRobotStatus } from '../api/sockets'

// styles
import './SystemDetails.css';

class SystemDetails extends Component {
  constructor() {
    super()

    this.state = {
      robotStatus: 'unknown'
    }

    subscribeToRobotStatus((err, robotStatus) => this.setState({
      robotStatus
    }))
  }

  render() {
    const { robotStatus } = this.state

    return (
      <div className="SystemDetails-container">
        <p className="SystemDetails-robot-status">
          Robot Status: {robotStatus}
        </p>
        {/* <p className="SystemDetails-current-pilot">
          Current Pilot: Username
        </p>
        <p className="SystemDetails-race-time">
          Race Time: 00:00
        </p>
        <p className="SystemDetails-queue-position">
          Queue Position: Not in Queue
        </p> */}
      </div>
    );
  }
}

export default SystemDetails;
