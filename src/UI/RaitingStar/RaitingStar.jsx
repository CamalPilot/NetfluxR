import React from 'react'
import { IoIosStar } from "react-icons/io";

const RaitingStar = ({children, className, style}) => {
  return (
    <div>
        <IoIosStar className={className} style={style}>{children}</IoIosStar>
    </div>
  )
}

export default RaitingStar