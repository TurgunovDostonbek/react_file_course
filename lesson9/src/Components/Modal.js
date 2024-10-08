import React from 'react'
import "./Modal.css"
import ReactDOM from 'react-dom'

function Modal({children, closeModal}) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
        <div className="modal">
            {children}
            <br />
            <button onClick={closeModal} >Close</button>
        </div>
    </div>
  ), document.body)
}

export default Modal