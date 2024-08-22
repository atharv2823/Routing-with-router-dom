import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo-name'>Desert</span>

       <div className='item-container'>
       <Link to="/" className='item'>
        Home
        </Link>

        <Link to="/about" className='item'>
        About
        </Link>

        <Link to="/contact" className='item'>
        Contact
        </Link>
       </div>
    </div>
  )
}

export default Navbar