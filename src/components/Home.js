import React, { Component } from 'react'

// components
import Header from './Header'
import Navigation from './Navigation'
import SystemDetails from './SystemDetails'
import VideoFeed from './VideoFeed'

// styles
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <Header />
        <VideoFeed
          className='Home-stream'
          containerClassName='Home-stream-container'
        />
        <SystemDetails />
        <Navigation />
      </div>
    )
  }
}

export default Home
