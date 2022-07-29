import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'


const Modal = (props) => {

    const { open, closeModal } = props



    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div className='modal-ctn' >
                <div className='content-ctn'>
                    <button onClick={(e) => {
                        e.stopPropagation()
                        closeModal()
                    }}>X</button>
                    <div className='resume'>
                        <a className='download' target='_blank' href='https://res.cloudinary.com/dtnif6mzm/image/upload/v1659014929/Portfolio%20-%202022/Philippe_De_Hovre_-Resume_-_July2022_hht70l.png'>Download</a>
                    </div>
                </div>
            </div>
        </>, document.getElementById('resume')
    )
}


export default Modal