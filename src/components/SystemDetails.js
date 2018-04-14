import React, { Component } from 'react'

// container
import RaceTimerContainer from '../containers/RaceTimerContainer'

// styles
import './css/SystemDetails.css'

class SystemDetails extends Component {
  render () {
    const { queue: { position }, robot: { status } } = this.props

    return (
      <div className='SystemDetails-container'>
        <p className='SystemDetails-robot-status'>Robot Status: {status}</p>
        {/* <p className="SystemDetails-current-pilot">
          Current Pilot: Username
        </p> */}
        <RaceTimerContainer />
        <p className='SystemDetails-queue-position'>
          Queue Position: {position}
        </p>
      </div>
    )
  }
}

export default SystemDetails
