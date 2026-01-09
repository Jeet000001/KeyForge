import React from 'react'

const Button = ({logo, style, click}) => {
  return (
    <div>
        <button onClick={click} className={style}>{logo}</button>
    </div>
  )
}

export default Button