// components
import GPIOMonitor from './GPIOMonitor'

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

const GPIOMonitorContainer = connect(mapStateToProps, mapDispatchToProps)(
  GPIOMonitor
)

export default GPIOMonitorContainer
