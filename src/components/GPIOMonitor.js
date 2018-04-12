import React, { Component } from 'react'

// components
import GPIOButton from './GPIOButton'

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
    const { gpio } = this.props

    return (
      <div className='GPIOMonitor-container'>
        <GPIOButton
          command='forward'
          disable
          gpio={gpio}
          icon={faCaretUp}
          size='3x'
        />
        <GPIOButton
          command='left'
          disable
          gpio={gpio}
          icon={faCaretLeft}
          size='3x'
        />
        <GPIOButton
          command='stop'
          disable
          gpio={gpio}
          icon={faStop}
          size='2x'
        />
        <GPIOButton
          command='right'
          disable
          gpio={gpio}
          icon={faCaretRight}
          size='3x'
        />
        <GPIOButton
          command='backward'
          disable
          gpio={gpio}
          icon={faCaretDown}
          size='3x'
        />
        <GPIOButton
          command='boost'
          disable
          gpio={gpio}
          icon={faRocket}
          size='2x'
        />
      </div>
    )
  }
}

export default GPIOMonitor
