import React from 'react'

const Button = ({children, type, className, onClick, style}) => {
  return (
    <button type={type} className={className} onClick={onClick} style={style}>{children}</button>
  )
}

export default Button