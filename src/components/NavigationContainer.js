// components
import Navigation from './Navigation'

// redux
import { connect } from 'react-redux'

// navigation
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return {
    queue: state.queue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    push: route => dispatch(push(route))
  }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(
  Navigation
)

export default NavigationContainer
