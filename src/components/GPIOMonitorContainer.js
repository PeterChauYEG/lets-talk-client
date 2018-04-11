// components
import GPIOMonitor from './GPIOMonitor'

// redux
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    gpio: state.gpio
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const GPIOMonitorContainer = connect(mapStateToProps, mapDispatchToProps)(
  GPIOMonitor
)

export default GPIOMonitorContainer
