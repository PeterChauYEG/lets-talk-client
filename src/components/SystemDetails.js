import React, { Component } from 'react'

// components
import GPIOMonitorContainer from './GPIOMonitorContainer'

// styles
import './SystemDetails.css'

class SystemDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      raceTime: 0
    }
  }

  render () {
    const { raceTime } = this.state
    const { queue: { position }, robot: { status } } = this.props

    return (
      <div className='SystemDetails-container'>
        <p className='SystemDetails-robot-status'>Robot Status: {status}</p>
        {/* <p className="SystemDetails-current-pilot">
          Current Pilot: Username
        </p> */}
        <p className='SystemDetails-race-time'>Race Time: {raceTime}</p>
        <p className='SystemDetails-queue-position'>
          Queue Position: {position}
        </p>
        <GPIOMonitorContainer />
      </div>
    )
  }
}

export default SystemDetails
