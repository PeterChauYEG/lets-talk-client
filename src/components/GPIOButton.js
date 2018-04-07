import React, { Component } from 'react'

// lib
import { publishGPIO, subscribeToGPIO } from '../api/sockets'

// styles
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './GPIOButton.css'

class GPIOButton extends Component {
  constructor () {
    super()

    this.state = {
      gpioDirection: null
    }

    subscribeToGPIO((err, gpioDirection) => {
      if (err) {
        console.log('error: ' + err)
        return
      }

      this.setState({
        gpioDirection
      })
    })
  }

  handleActive () {
    const { gpioDirection } = this.state
    const { direction } = this.props

    let className = 'GPIOButton-icon'

    // check if null
    if (gpioDirection === direction) {
      className = 'GPIOButton-icon-active'
    }

    return className
  }

  render () {
    const { direction, icon, size } = this.props

    return (
      <FontAwesomeIcon
        className={this.handleActive()}
        onClick={() => publishGPIO(direction)}
        icon={icon}
        size={size}
      />
    )
  }
}

export default GPIOButton
