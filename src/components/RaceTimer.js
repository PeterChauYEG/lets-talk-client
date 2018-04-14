import React, { Component } from 'react'
import moment from 'moment'

// styles
import './css/RaceTimer.css'

class RaceTimer extends Component {
  handleClassName () {
    const { className } = this.props

    let result = 'RaceTimer-race-time'

    if (className) {
      result = className
    }

    return result
  }

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
    return (
      <p className={this.handleClassName()}>
        Remaining Time: {this.renderTime()}
      </p>
    )
  }
}

export default RaceTimer
