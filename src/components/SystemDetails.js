import React, { Component } from 'react';

// styles
import './SystemDetails.css';

class SystemDetails extends Component {
  render() {
    return (
      <div className="SystemDetails-container">
        <p className="SystemDetails-robot-status">
          Robot Status: Online
        </p>
        <p className="SystemDetails-current-pilot">
          Current Pilot: Username
        </p>
        <p className="SystemDetails-race-time">
          Race Time: 00:00
        </p>
        <p className="SystemDetails-queue-position">
          Queue Position: Not in Queue
        </p>
      </div>
    );
  }
}

export default SystemDetails;
