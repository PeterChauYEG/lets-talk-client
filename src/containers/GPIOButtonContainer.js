// components
import GPIOButton from '../components/GPIOButton'

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

const GPIOButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  GPIOButton
)

export default GPIOButtonContainer
