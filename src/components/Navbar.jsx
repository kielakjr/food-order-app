import React from 'react'
import logo from '../assets/logo.jpg'
import { CartContext } from '../store/cart-context'
import { useContext, useRef } from 'react';
import CartModal from './CartModal';

const Navbar = () => {
  const { items } = useContext(CartContext);
  const modal = useRef();

  return (
    <>
    <CartModal ref={modal} />
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button className="text-button" onClick={() => modal.current.open()}>Cart{items.length > 0 ? ` (${items.length})` : ''}</button>
      </nav>
    </header>
    </>
  )
}

export default Navbar
