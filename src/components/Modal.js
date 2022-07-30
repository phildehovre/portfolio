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
                        <a className='download' target='_blank' href='https://res.cloudinary.com/dtnif6mzm/image/upload/v1659179306/Portfolio%20-%202022/Philippe_De_Hovre_-_Resume_2022_1_mihtu5.png'>Download</a>
                    </div>
                </div>
            </div>
        </>, document.getElementById('resume')
    )
}


export default Modal