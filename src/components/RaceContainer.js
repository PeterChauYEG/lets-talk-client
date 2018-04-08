// components
import Race from './Race'

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

const RaceContainer = connect(mapStateToProps, mapDispatchToProps)(Race)

export default RaceContainer
