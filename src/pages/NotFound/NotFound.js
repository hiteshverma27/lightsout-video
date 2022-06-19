import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex-center-center h-100vh w-100wv'>
    <h1>Its a 404! The page you are looking for does not exist! <Link to="/" className="btn-primary-confirm w-10rem">Home</Link></h1>
    </div>
  )
}

export {NotFound}