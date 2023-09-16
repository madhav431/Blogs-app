import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function NotFound() {
  return (
    <div>
        <h3>OH OH!</h3>
        <p>This page connot be found</p>
        <Link to="/">Back to Home page...</Link>
    </div>
  )
}

export default NotFound