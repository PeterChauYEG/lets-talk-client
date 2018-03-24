import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MMOR</h1>
          <p className="App-username">Username</p>
        </header>
        <div className="App-stream-container">
          <img className="App-stream"
            src="http://via.placeholder.com/500x500" />
        </div>

        <div className="App-body-container">
          <p className="App-queue-position">
            Queue Position: Not in Queue
          </p>
        </div>

        <div className="App-button-container">
          <div className="App-button">
            Join Queue
          </div>
          <div className="App-button">
            Leaderboard
          </div>
        </div>
      </div>
    );
  }
}

export default App;
