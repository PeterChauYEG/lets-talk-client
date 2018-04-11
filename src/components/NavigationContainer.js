// components
import Navigation from './Navigation'

// redux
import { connect } from 'react-redux'
import { handleQueue } from '../redux/queue'

// navigation
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return {
    queue: state.queue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleQueue: action => dispatch(handleQueue(action)),
    push: route => dispatch(push(route))
  }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(
  Navigation
)

export default NavigationContainer
