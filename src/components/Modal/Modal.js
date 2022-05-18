import React from 'react'

function Modal({children, open, onClose}) {
    if(!open) return null
  return (
    <div>
    <button onClick={onClose}>Close</button>    
        {children}</div>
  )
}

export {Modal}