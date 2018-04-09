import React, { Component } from 'react'

// socket
import {
  subscribeToQueue,
  subscribeToRaceTime,
  subscribeToRobotStatus
} from '../api/sockets'

// components
import GPIOMonitorContainer from './GPIOMonitorContainer'

// styles
import './SystemDetails.css'

class SystemDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      robotStatus: 'unknown',
      raceTime: 0
    }

    const { updateQueuePosition } = this.props

    subscribeToQueue((err, queuePosition) => {
      if (err) {
        console.log('error: ' + err)
        return
      }
      updateQueuePosition(queuePosition)
    })

    subscribeToRaceTime((err, raceTime) => {
      if (err) {
        console.log('error: ' + err)
        return
      }
      this.setState({
        raceTime
      })
    })

    subscribeToRobotStatus((err, robotStatus) => {
      if (err) {
        console.log('error: ' + err)
        return
      }

      this.setState({
        robotStatus
      })
    })
  }

  render () {
    const { robotStatus, raceTime } = this.state
    const { position } = this.props.queue

    return (
      <div className='SystemDetails-container'>
        <p className='SystemDetails-robot-status'>
          Robot Status: {robotStatus}
        </p>
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
