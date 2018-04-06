import React, { Component } from 'react';

//redux
import { store } from '../redux';

// navigation
import { push } from 'react-router-redux';

// components
import Header from './Header';
import SystemDetails from './SystemDetails';
import VideoFeed from './VideoFeed';

// styles
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <VideoFeed
          className="Home-stream"
          containerClassName="Home-stream-container" />
        <SystemDetails />

        <div className="Home-button-container">
          <div className="Home-button"
            onClick={() => store.dispatch(push('/race'))}>
            Join Queue
          </div>
          <div className="Home-button"
            onClick={() => store.dispatch(push('/leaderboard'))}>
            Leaderboard
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
