// components
import Race from '../components/Race'

// redux
import { connect } from 'react-redux'
import { handleGPIO } from '../redux/gpio'

// navigation
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return {
    queue: state.queue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGPIO: command => dispatch(handleGPIO(command)),
    push: route => dispatch(push(route))
  }
}

const RaceContainer = connect(mapStateToProps, mapDispatchToProps)(Race)

export default RaceContainer
