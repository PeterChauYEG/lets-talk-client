// components
import GPIOControl from './GPIOControl'

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

const GPIOControlContainer = connect(mapStateToProps, mapDispatchToProps)(
  GPIOControl
)

export default GPIOControlContainer
