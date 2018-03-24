import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">MMOR</h1>
          <h1 className="username">Username</h1>
        </header>
        <div className="stream-container">
          <img className="stream"
            src="http://via.placeholder.com/500x500" />
        </div>

        <div className="body-container">
          <p className="queue-position">
            Queue Position: Not in Queue
          </p>
        </div>

        <div className="button-container">
          <div className="button">
            Join Queue
          </div>
          <div className="button">
            Leaderboard
          </div>
        </div>
      </div>
    );
  }
}

export default App;
