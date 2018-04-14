import React, { Component } from 'react'

// styles
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './css/GPIOButton.css'

class GPIOButton extends Component {
  constructor (props) {
    super(props)

    this.handleActive = this.handleActive.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleActive (className) {
    const { command, gpio } = this.props

    let result = className

    // check if null
    if (gpio.command === command) {
      result = result + '-active'
    }

    return result
  }

  handleOnClick () {
    const { command, disable, handleGPIO } = this.props

    if (disable) {
      return
    }

    handleGPIO(command)
  }

  renderIcon () {
    const { icon, size } = this.props

    return (
      <FontAwesomeIcon
        className={this.handleActive('GPIOButton-icon')}
        onClick={this.handleOnClick}
        icon={icon}
        size={size}
      />
    )
  }

  renderButton () {
    const { disable } = this.props

    return (
      <button
        className={this.handleActive('GPIOButton-button')}
        disabled={disable}
        onClick={this.handleOnClick}
      >
        <p>BOOST</p>
      </button>
    )
  }

  render () {
    const { command } = this.props

    let item = this.renderIcon()
    if (command === 'boost') {
      item = this.renderButton()
    }

    return item
  }
}

export default GPIOButton
