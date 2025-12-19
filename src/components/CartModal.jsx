import { useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const CartModal = ({ ref }) => {
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
    <dialog ref={dialog}>
      <h2>Your Cart</h2>
    </dialog>,
    document.getElementById('modal')
  )
}

export default CartModal
