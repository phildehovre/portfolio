import React from 'react'
import './Modal.css'


const Modal = (props) => {

    const { children } = props

    return (
        <div className='modal-ctn'>{children}</div>
    )
}


export default Modal