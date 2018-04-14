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

  handleActive () {
    const { command, gpio } = this.props

    let className = 'GPIOButton-icon'

    // check if null
    if (gpio.command === command) {
      className = 'GPIOButton-icon-active'
    }

    return className
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
        className={this.handleActive()}
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
        className={'GPIOButton-button'}
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
