import React, { Component } from 'react';

//redux
import { store } from '../redux';

// navigation
import { push } from 'react-router-redux';

// styles
import './Header.css';

class Header extends Component {
  renderTitle() {
    const { title } = this.props

    if (title) {
      return <p className="Header-title">{title}</p>
    }
  }
  render() {
    return (
      <header className="Header-container">
        <h1 className="Header-site-title"
          onClick={() => store.dispatch(push('/'))}>
          MMOR
        </h1>
        {this.renderTitle()}
        <p className="Header-username">Username</p>
      </header>
    );
  }
}

export default Header;
