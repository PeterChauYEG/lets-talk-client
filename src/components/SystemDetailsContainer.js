// components
import SystemDetails from './SystemDetails'

// redux
import { updateQueuePosition } from '../redux/queue'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    queue: state.queue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateQueuePosition: position => dispatch(updateQueuePosition(position))
  }
}

const SystemDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(
  SystemDetails
)

export default SystemDetailsContainer
