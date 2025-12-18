import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button className="text-button">Cart</button>
      </nav>
    </header>
  )
}

export default Navbar
