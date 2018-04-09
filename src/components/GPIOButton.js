import React, { Component } from 'react'

// lib
import { publishGPIO, subscribeToGPIO } from '../api/sockets'

// styles
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './GPIOButton.css'

class GPIOButton extends Component {
  constructor (props) {
    super(props)

    this.state = {
      gpioDirection: null
    }

    const { updateGPIO } = this.props

    subscribeToGPIO((err, direction) => {
      if (err) {
        console.log('error: ' + err)
        return
      }

      updateGPIO(direction)
    })

    this.handleActive = this.handleActive.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleActive () {
    const { direction, gpio } = this.props

    let className = 'GPIOButton-icon'

    // check if null
    if (gpio.direction === direction) {
      className = 'GPIOButton-icon-active'
    }

    return className
  }

  handleOnClick () {
    const { direction, disable } = this.props

    if (disable) {
      return
    }

    publishGPIO(direction)
  }

  render () {
    const { icon, size } = this.props

    return (
      <FontAwesomeIcon
        className={this.handleActive()}
        onClick={this.handleOnClick}
        icon={icon}
        size={size}
      />
    )
  }
}

export default GPIOButton
