import React, { Component, Fragment } from 'react'

// components
import HeaderContainer from '../containers/HeaderContainer'
import NavigationContainer from '../containers/NavigationContainer'
import SystemDetailsContainer from '../containers/SystemDetailsContainer'
import VideoFeed from './VideoFeed'
import GPIOMonitor from './GPIOMonitor'

// styles
import './css/Home.css'

class Home extends Component {
  renderControlPanel () {
      const { authentication } = this.props

      let results = <p className="Home-controls-login">Log in to pilot this robot</p>

      if (authentication.username) {
        results = (
          <Fragment>
            <div className='Home-controls-left'>
              <SystemDetailsContainer />
              <NavigationContainer />
            </div>
            <GPIOMonitor />
          </Fragment>
        )
      }

      return results
  }

  render () {
    return (
      <div className='Home'>
        <HeaderContainer />
        <VideoFeed
          className='Home-stream'
          containerClassName='Home-stream-container'
        />
        <div className='Home-controls'>
          {this.renderControlPanel()}
        </div>
      </div>
    )
  }
}

export default Home
