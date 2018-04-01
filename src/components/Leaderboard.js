import React, { Component } from 'react';
import './Leaderboard.css';

//redux
import { store } from '../redux';

// navigation
import { push } from 'react-router-redux';

class Leaderboard extends Component {
  render() {
    return (
      <div className="Leaderboard">
        <header className="Leaderboard-header">
          <h1 className="Home-title"
            onClick={() => store.dispatch(push('/'))}>
            MMOR
          </h1>
          <p className="Leaderboard-headline">
            Leaderboard
          </p>
          <p className="Leaderboard-username">Username</p>
        </header>

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