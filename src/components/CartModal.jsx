import { useImperativeHandle, useRef, useContext } from 'react'
import { createPortal } from 'react-dom'
import { CartContext } from '../store/cart-context'

const CartModal = ({ ref }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
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
    <dialog ref={dialog} className="cart modal">
      <h2>Your Cart</h2>
      <ul>
        {items.length === 0 && <p>Your cart is empty.</p>}
        {items.map(item => (
          <li key={item.id} className="cart-item">
              <p>{item.name} - {item.quantity} X ${item.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => removeItem(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => addItem(item)}>+</button>
              </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>${totalAmount}</h3>
      </div>
    </dialog>,
    document.getElementById('modal')
  )
}

export default CartModal
