import logo from '../assets/logo.jpg'
import { CartContext } from '../store/cart-context'
import { useContext, useRef } from 'react';
import CartModal from './CartModal';
import CheckoutModal from './CheckoutModal';

const Navbar = () => {
  const { items } = useContext(CartContext);
  const cartModal = useRef();
  const checkoutModal = useRef();

  const handleCheckout = () => {
    checkoutModal.current.open();
    cartModal.current.close();
  }

  return (
    <>
    <CartModal ref={cartModal} onCheckout={handleCheckout} />
    <CheckoutModal ref={checkoutModal} />
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button className="text-button" onClick={() => cartModal.current.open()}>Cart{items.length > 0 ? ` (${items.length})` : ''}</button>
      </nav>
    </header>
    </>
  )
}

export default Navbar
