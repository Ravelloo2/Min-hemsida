import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <nav>      
    <Link className="navbarContent" to="/hobbies" > Mina Hobbies </Link>
    <Link className="navbarContent" to="/aboutme" > Om mig </Link>
    <Link className="navbarContent" to="/usestate" > UseState </Link>
    <Link className="navbarContent" to="/counter" > Counter </Link>
    </nav>
  )
}

export default Navbar