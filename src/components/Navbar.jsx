import React from 'react'
import logo from '../assets/logo.jpg'
import { CartContext } from '../store/cart-context'
import { useContext } from 'react';

const Navbar = () => {
  const { items } = useContext(CartContext);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button className="text-button">Cart ({items.length})</button>
      </nav>
    </header>
  )
}

export default Navbar
