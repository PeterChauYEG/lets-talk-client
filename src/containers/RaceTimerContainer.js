// components
import RaceTimer from '../components/RaceTimer'

// redux
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    race: state.race
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const RaceTimeContainer = connect(mapStateToProps, mapDispatchToProps)(
  RaceTimer
)

export default RaceTimeContainer
