import React, { Component } from 'react';

//redux
import { store } from '../redux';

// navigation
import { push } from 'react-router-redux';

// styles
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header-container">
        <h1 className="Header-title"
          onClick={() => store.dispatch(push('/'))}>
          MMOR
        </h1>
        <p className="Header-username">Username</p>
      </header>
    );
  }
}

export default Header;
