import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button  className={`px-4 btn rounded-pill my-2 fw-semibold ${props.bgColor}`} 
        style={{ backgroundColor: props.bgColor }}>{props.btnText}</button>
    </div>
  )
}
