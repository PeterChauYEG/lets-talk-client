// components
import SystemDetails from '../components/SystemDetails'

// redux
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    queue: state.queue,
    robot: state.robot
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const SystemDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(
  SystemDetails
)

export default SystemDetailsContainer
