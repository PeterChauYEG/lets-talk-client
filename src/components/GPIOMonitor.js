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
import './css/GPIOMonitor.css'

class GPIOMonitor extends Component {
  render () {
    return (
      <div className='GPIOMonitor-container'>
        <div className='GPIOMonitor-container-left'>
          <GPIOButtonContainer
            command='forward'
            disable
            icon={faCaretUp}
            size='4x'
          />

          <div className='GPIOMonitor-container-center'>
            <GPIOButtonContainer
              command='left'
              disable
              icon={faCaretLeft}
              size='4x'
            />
            <GPIOButtonContainer
              command='stop'
              disable
              icon={faStop}
              size='3x'
            />
            <GPIOButtonContainer
              command='right'
              disable
              icon={faCaretRight}
              size='4x'
            />
          </div>

          <GPIOButtonContainer
            command='backward'
            disable
            icon={faCaretDown}
            size='4x'
          />
        </div>

        <div className='GPIOMonitor-container-right'>
          <GPIOButtonContainer
            command='boost'
            disable
            icon={faRocket}
            size='3x'
          />
        </div>
      </div>
    )
  }
}

export default GPIOMonitor
