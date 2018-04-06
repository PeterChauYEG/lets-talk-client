import React, { Component } from 'react';
import './Leaderboard.css';

// components
import Header from './Header'

class Leaderboard extends Component {
  render() {
    return (
      <div className="Leaderboard">
        <Header title="Leaderboard" />

        <div className="Leaderboard-rankings">
          <div className="Leaderboard-rank">
            <p className="Leaderboard-position">
              #1
            </p>
            <p className="Leaderboard-rank-username">
              Username
            </p>
            <p className="Leaderboard-racetime">
              05:00
            </p>
          </div>
          <div className="Leaderboard-rank">
            <p className="Leaderboard-position">
              #1
            </p>
            <p className="Leaderboard-rank-username">
              Username
            </p>
            <p className="Leaderboard-racetime">
              05:00
            </p>
          </div>
          <div className="Leaderboard-rank">
            <p className="Leaderboard-position">
              #1
            </p>
            <p className="Leaderboard-rank-username">
              Username
            </p>
            <p className="Leaderboard-racetime">
              05:00
            </p>
          </div>
          <div className="Leaderboard-rank">
            <p className="Leaderboard-position">
              #1
            </p>
            <p className="Leaderboard-rank-username">
              Username
            </p>
            <p className="Leaderboard-racetime">
              05:00
            </p>
          </div>
          <div className="Leaderboard-rank">
            <p className="Leaderboard-position">
              #1
            </p>
            <p className="Leaderboard-rank-username">
              Username
            </p>
            <p className="Leaderboard-racetime">
              05:00
            </p>
          </div>
          <div className="Leaderboard-rank">
            <p className="Leaderboard-position">
              #1
            </p>
            <p className="Leaderboard-rank-username">
              Username
            </p>
            <p className="Leaderboard-racetime">
              05:00
            </p>
          </div>
          <div className="Leaderboard-rank">
            <p className="Leaderboard-position">
              #1
            </p>
            <p className="Leaderboard-rank-username">
              Username
            </p>
            <p className="Leaderboard-racetime">
              05:00
            </p>
          </div>
          <div className="Leaderboard-rank">
            <p className="Leaderboard-position">
              #1
            </p>
            <p className="Leaderboard-rank-username">
              Username
            </p>
            <p className="Leaderboard-racetime">
              05:00
            </p>
          </div>

          <div className="Leaderboard-button-container">
            <div className="Leaderboard-button">
              Prev
            </div>
            <div className="Leaderboard-button">
              Next
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
