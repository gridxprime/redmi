import React from 'react'

const Calendar = (props) => {
  return (
    <div className='app__name'>
    <img src={props.image} alt="" />
    <span>{props.text}</span>
  </div>
  )
}

export default Calendar