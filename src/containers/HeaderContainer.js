// components
import Header from '../components/Header'

// redux
import { connect } from 'react-redux'
import { loginRequest, logoutRequest } from '../redux/authentication'
import { handleQueue } from '../redux/queue'

// navigation
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return {
    authentication: state.authentication,
    queue: state.queue,
    router: state.router
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleQueue: action => dispatch(handleQueue(action)),
    loginRequest: (username, password) => dispatch(loginRequest(username, password)),
    logoutRequest: () => dispatch(logoutRequest()),
    push: route => dispatch(push(route)),
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
