import React from 'react'
import "./Buttons.css"

const Buttons = (props) => {
  return (
    <div>
      <button className='button' onClick={() => {
        props.setVisual(true)
      }}>Visual</button>
      <button className='button' onClick={() => {
        props.setVisual(false)
      }}>Text</button>
    </div>
  )
}

export default Buttons
