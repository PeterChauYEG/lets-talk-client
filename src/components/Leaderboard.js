import React, { Component } from 'react'

// styles
import './css/Leaderboard.css'

// components
import HeaderContainer from '../containers/HeaderContainer'

class Leaderboard extends Component {
  render () {
    return (
      <div className='Leaderboard'>
        <HeaderContainer title='Leaderboard' />

        <div className='Leaderboard-rankings'>
          <div className='Leaderboard-rank'>
            <p className='Leaderboard-position'>#1</p>
            <p className='Leaderboard-rank-username'>Username</p>
            <p className='Leaderboard-racetime'>05:00</p>
          </div>
          <div className='Leaderboard-rank'>
            <p className='Leaderboard-position'>#1</p>
            <p className='Leaderboard-rank-username'>Username</p>
            <p className='Leaderboard-racetime'>05:00</p>
          </div>
          <div className='Leaderboard-rank'>
            <p className='Leaderboard-position'>#1</p>
            <p className='Leaderboard-rank-username'>Username</p>
            <p className='Leaderboard-racetime'>05:00</p>
          </div>
          <div className='Leaderboard-rank'>
            <p className='Leaderboard-position'>#1</p>
            <p className='Leaderboard-rank-username'>Username</p>
            <p className='Leaderboard-racetime'>05:00</p>
          </div>
          <div className='Leaderboard-rank'>
            <p className='Leaderboard-position'>#1</p>
            <p className='Leaderboard-rank-username'>Username</p>
            <p className='Leaderboard-racetime'>05:00</p>
          </div>
          <div className='Leaderboard-rank'>
            <p className='Leaderboard-position'>#1</p>
            <p className='Leaderboard-rank-username'>Username</p>
            <p className='Leaderboard-racetime'>05:00</p>
          </div>
          <div className='Leaderboard-rank'>
            <p className='Leaderboard-position'>#1</p>
            <p className='Leaderboard-rank-username'>Username</p>
            <p className='Leaderboard-racetime'>05:00</p>
          </div>
          <div className='Leaderboard-rank'>
            <p className='Leaderboard-position'>#1</p>
            <p className='Leaderboard-rank-username'>Username</p>
            <p className='Leaderboard-racetime'>05:00</p>
          </div>

          <div className='Leaderboard-button-container'>
            <button className='Leaderboard-button'>
              <p>Prev</p>
            </button>
            <button className='Leaderboard-button'>
              <p>Next</p>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Leaderboard
