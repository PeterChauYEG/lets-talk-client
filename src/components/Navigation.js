import React, { Component } from 'react';

//redux
import { store } from '../redux';

// navigation
import { push } from 'react-router-redux';

// styles
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation-container">
        <div className="Navigation-button"
          onClick={() => store.dispatch(push('/race'))}>
          Join Queue
        </div>
        <div className="Navigation-button"
          onClick={() => store.dispatch(push('/leaderboard'))}>
          Leaderboard
        </div>
      </div>
    );
  }
}

export default Navigation;
