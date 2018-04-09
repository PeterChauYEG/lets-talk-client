// components
import GPIOControl from './GPIOControl'

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

const GPIOControlContainer = connect(mapStateToProps, mapDispatchToProps)(
  GPIOControl
)

export default GPIOControlContainer
