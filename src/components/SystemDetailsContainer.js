// components
import SystemDetails from './SystemDetails'

// redux
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    queue: state.queue
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const SystemDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(
  SystemDetails
)

export default SystemDetailsContainer
