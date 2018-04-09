// components
import GPIOButton from './GPIOButton'

// redux
import { connect } from 'react-redux'
import { updateGPIO } from '../redux/gpio'

const mapStateToProps = state => {
  return {
    gpio: state.gpio
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateGPIO: direction => dispatch(updateGPIO(direction))
  }
}

const GPIOButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  GPIOButton
)

export default GPIOButtonContainer
