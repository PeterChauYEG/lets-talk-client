// components
import Home from '../components/Home'

// redux
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
