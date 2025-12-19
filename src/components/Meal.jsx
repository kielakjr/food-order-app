import React from 'react'
import { CartContext } from '../store/cart-context'
import { useContext } from 'react';

const Meal = ( { id, name, price, description, image}) => {
  const { addItem } = useContext(CartContext);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">${price}</p>
          <p className="meal-item-description">{description}</p>
          <button className="button meal-item-actions" onClick={() => addItem({ id, name, price, description, image })}>Add to Cart</button>
        </div>
      </article>
    </li>
  )
}

export default Meal
