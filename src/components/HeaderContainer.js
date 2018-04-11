// components
import Header from './Header'

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

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
