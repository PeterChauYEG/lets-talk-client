import React, { Component } from 'react'

// socket
import { subscribeToQueue, subscribeToRobotStatus } from '../api/sockets'

// components
import GPIOButton from './GPIOButton'

// styles
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp'
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
import faStop from '@fortawesome/fontawesome-free-solid/faStop'
import './SystemDetails.css'

class SystemDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      robotStatus: 'unknown'
    }

    const { updateQueuePosition } = this.props

    subscribeToQueue((err, queuePosition) => {
      if (err) {
        console.log('error: ' + err)
        return
      }
      updateQueuePosition(queuePosition)
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
    const { robotStatus } = this.state
    const { position } = this.props.queue

    return (
      <div className='SystemDetails-container'>
        <p className='SystemDetails-robot-status'>
          Robot Status: {robotStatus}
        </p>
        {/* <p className="SystemDetails-current-pilot">
          Current Pilot: Username
        </p>
        <p className="SystemDetails-race-time">
          Race Time: 00:00
        </p> */}
        <p className='SystemDetails-queue-position'>
          Queue Position: {position}
        </p>
        <div className='SystemDetails-GPIO-container'>
          <GPIOButton direction='forward' disable icon={faCaretUp} size='3x' />
          <GPIOButton direction='left' disable icon={faCaretLeft} size='3x' />
          <GPIOButton direction='stop' disable icon={faStop} size='2x' />
          <GPIOButton direction='right' disable icon={faCaretRight} size='3x' />
          <GPIOButton
            direction='backward'
            disable
            icon={faCaretDown}
            size='3x'
          />
          <GPIOButton direction='boost' disable icon={faRocket} size='2x' />
        </div>
      </div>
    )
  }
}

export default SystemDetails
