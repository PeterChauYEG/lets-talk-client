// components
import Header from './Header'

// redux
import { connect } from 'react-redux'
import { updateQueuePosition } from '../redux/queue'

// navigation
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return {
    queue: state.queue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    push: route => dispatch(push(route)),
    updateQueuePosition: position => dispatch(updateQueuePosition(position))
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
