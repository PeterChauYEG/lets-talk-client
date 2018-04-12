import React, { Component } from 'react'

// lib
import { publishGPIO } from '../api/sockets'

// styles
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './css/GPIOButton.css'

class GPIOButton extends Component {
  constructor (props) {
    super(props)

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
