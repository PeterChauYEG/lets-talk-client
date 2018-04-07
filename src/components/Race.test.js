import React from 'react'
import ReactDOM from 'react-dom'
import Race from './Race'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Race />, div)
  ReactDOM.unmountComponentAtNode(div)
})
