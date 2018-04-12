import React, { Component, Fragment } from 'react'

// components
import GPIOButton from './GPIOButton'

// styles
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp'
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
import faStop from '@fortawesome/fontawesome-free-solid/faStop'
import './css/GPIOControl.css'

class GPIOControl extends Component {
  render () {
    const { gpio, handleGPIO } = this.props

    return (
      <Fragment>
        <div className='GPIOControl-container-left'>
          <GPIOButton
            command='forward'
            gpio={gpio}
            handleGPIO={handleGPIO}
            icon={faCaretUp}
            size='4x'
          />

          <div className='GPIOControl-container-center'>
            <GPIOButton
              command='left'
              gpio={gpio}
              handleGPIO={handleGPIO}
              icon={faCaretLeft}
              size='4x'
            />
            <GPIOButton
              command='stop'
              gpio={gpio}
              handleGPIO={handleGPIO}
              icon={faStop}
              size='3x'
            />
            <GPIOButton
              command='right'
              gpio={gpio}
              handleGPIO={handleGPIO}
              icon={faCaretRight}
              size='4x'
            />
          </div>

          <GPIOButton
            command='backward'
            gpio={gpio}
            handleGPIO={handleGPIO}
            icon={faCaretDown}
            size='4x'
          />
        </div>

        <div className='GPIOControl-container-right'>
          <GPIOButton
            command='boost'
            gpio={gpio}
            handleGPIO={handleGPIO}
            icon={faRocket}
            size='3x'
          />
        </div>
      </Fragment>
    )
  }
}

export default GPIOControl
