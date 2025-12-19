import React from 'react'
import Input from './Input'

const CheckoutForm = ({ totalAmount, onClose }) => {
  return (
     <form>
        <h2>Checkout</h2>
        <p>Total Amount: ${totalAmount}</p>
        <Input id="name" label="Full Name" type="text" required />
        <Input id="email" label="Email" type="email" required />
        <Input id="street" label="Street" type="text" required />
        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text" required />
          <Input id="city" label="City" type="text" required />
        </div>
        <div className="modal-actions">
          <button className="text-button" type="button" onClick={onClose}>Close</button>
          <button className="button" type="submit">Confirm Order</button>
        </div>
      </form>
  )
}

export default CheckoutForm
