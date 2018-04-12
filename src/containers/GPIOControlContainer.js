// components
import GPIOControl from '../components/GPIOControl'

// redux
import { connect } from 'react-redux'
import { handleGPIO } from '../redux/gpio'

const mapStateToProps = state => {
  return {
    gpio: state.gpio
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGPIO: command => dispatch(handleGPIO(command))
  }
}

const GPIOControlContainer = connect(mapStateToProps, mapDispatchToProps)(
  GPIOControl
)

export default GPIOControlContainer
