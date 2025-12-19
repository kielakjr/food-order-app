import React from 'react'
import { createPortal } from 'react-dom'
import { useImperativeHandle, useRef, useContext } from 'react'
import { CartContext } from '../store/cart-context'
import CheckoutForm from './CheckoutForm'

const CheckoutModal = ({ ref }) => {
  const { totalAmount } = useContext(CartContext);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
        close() {
          dialog.current.close();
        }
      }
    }, []);

  return createPortal(
    <dialog ref={dialog} className="modal">
     <CheckoutForm totalAmount={totalAmount} onClose={() => dialog.current.close()} />
    </dialog>,
    document.getElementById('modal')
  )
}

export default CheckoutModal
