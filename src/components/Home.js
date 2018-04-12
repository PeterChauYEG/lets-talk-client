import React, { Component } from 'react'

// components
import HeaderContainer from './HeaderContainer'
import NavigationContainer from './NavigationContainer'
import SystemDetailsContainer from './SystemDetailsContainer'
import VideoFeed from './VideoFeed'

// styles
import './css/Home.css'

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <HeaderContainer />
        <VideoFeed
          className='Home-stream'
          containerClassName='Home-stream-container'
        />
        <SystemDetailsContainer />
        <NavigationContainer />
      </div>
    )
  }
}

export default Home
