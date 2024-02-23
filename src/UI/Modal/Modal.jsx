import React from 'react'
import Button from '../Button/Button'

import './Modal.scss'

const Modal = ({children, isOpen, onClose}) => {
  return (
    isOpen && (
    <div className='modal'>
        <div className="modal__wrapper">
            <div className="modal__wrapper__content">
                {children}
                <Button className="modal__wrapper__content__close" type="button" onClick = {onClose}>X</Button>
            </div>
        </div>
    </div>
  ))
}

export default Modal