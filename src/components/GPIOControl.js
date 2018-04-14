import React, { Component } from 'react'

// components
import GPIOButtonContainer from '../containers/GPIOButtonContainer'

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
    return (
      <div className='GPIOControl-container'>
        <div className='GPIOControl-container-left'>
          <GPIOButtonContainer command='forward' icon={faCaretUp} size='4x' />

          <div className='GPIOControl-container-center'>
            <GPIOButtonContainer command='left' icon={faCaretLeft} size='4x' />
            <GPIOButtonContainer command='stop' icon={faStop} size='3x' />
            <GPIOButtonContainer
              command='right'
              icon={faCaretRight}
              size='4x'
            />
          </div>

          <GPIOButtonContainer
            command='backward'
            icon={faCaretDown}
            size='4x'
          />
        </div>

        <div className='GPIOControl-container-right'>
          <GPIOButtonContainer command='boost' icon={faRocket} size='3x' />
        </div>
      </div>
    )
  }
}

export default GPIOControl
