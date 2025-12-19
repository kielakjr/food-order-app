import React from 'react'
import { createPortal } from 'react-dom'
import { useImperativeHandle, useRef } from 'react'

const CheckoutModal = ({ ref }) => {
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
    <dialog ref={dialog} className="checkout modal">
      <h2>Checkout</h2>
    </dialog>,
    document.getElementById('modal')
  )
}

export default CheckoutModal
