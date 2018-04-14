import React, { Component } from 'react'
import moment from 'moment'

// styles
import './css/SystemDetails.css'

class SystemDetails extends Component {
  renderTime () {
    const { race: { time } } = this.props

    // convert the time in seconds to a datetime
    const timeToDatetime = moment()
      .startOf('day')
      .seconds(time)

    // format it to minutes and seconds
    const formattedTime = moment(timeToDatetime).format('mm:ss')

    return formattedTime
  }

  render () {
    const { queue: { position }, robot: { status } } = this.props

    return (
      <div className='SystemDetails-container'>
        <p className='SystemDetails-robot-status'>Robot Status: {status}</p>
        {/* <p className="SystemDetails-current-pilot">
          Current Pilot: Username
        </p> */}
        <p className='SystemDetails-race-time'>
          Time Remaining: {this.renderTime()}
        </p>
        <p className='SystemDetails-queue-position'>
          Queue Position: {position}
        </p>
      </div>
    )
  }
}

export default SystemDetails
