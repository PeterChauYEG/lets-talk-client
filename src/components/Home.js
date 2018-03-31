import React, { Component } from 'react';

//redux
import { store } from '../redux';

// navigation
import { push } from 'react-router-redux';

// styles
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title"
            onClick={() => store.dispatch(push('/'))}>
            MMOR
          </h1>
          <p className="Home-username">Username</p>
        </header>
        <div className="Home-stream-container">
          <img
            className="Home-stream"
            src="http://lets-talk.ngrok.io/test.mjpg"
            alt="stream"
          />
        </div>

        <div className="Home-body-container">
          <p className="Home-queue-position">
            Queue Position: Not in Queue
          </p>
        </div>

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
