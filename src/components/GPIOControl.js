import React, { Component, Fragment } from 'react'

// lib
import { subscribeToGPIO } from '../api/sockets'

// components
import GPIOButton from './GPIOButton'

// styles
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp'
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
import faStop from '@fortawesome/fontawesome-free-solid/faStop'
import './GPIOControl.css'

class GPIOControl extends Component {
  constructor (props) {
    super(props)

    const { updateGPIO } = this.props

    subscribeToGPIO((err, direction) => {
      if (err) {
        console.log('error: ' + err)
        return
      }

      updateGPIO(direction)
    })
  }

  render () {
    const { gpio } = this.props

    return (
      <Fragment>
        <div className='GPIOControl-container-left'>
          <GPIOButton
            direction='forward'
            gpio={gpio}
            icon={faCaretUp}
            size='4x'
          />

          <div className='GPIOControl-container-center'>
            <GPIOButton
              direction='left'
              gpio={gpio}
              icon={faCaretLeft}
              size='4x'
            />
            <GPIOButton direction='stop' gpio={gpio} icon={faStop} size='3x' />
            <GPIOButton
              direction='right'
              gpio={gpio}
              icon={faCaretRight}
              size='4x'
            />
          </div>

          <GPIOButton
            direction='backward'
            gpio={gpio}
            icon={faCaretDown}
            size='4x'
          />
        </div>

        <div className='GPIOControl-container-right'>
          <GPIOButton direction='boost' gpio={gpio} icon={faRocket} size='3x' />
        </div>
      </Fragment>
    )
  }
}

export default GPIOControl
