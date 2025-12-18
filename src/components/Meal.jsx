import React from 'react'

const Meal = ( { name, price, description, image}) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">${price}</p>
          <p className="meal-item-description">{description}</p>
          <button className="button meal-item-actions">Add to Cart</button>
        </div>
      </article>
    </li>
  )
}

export default Meal
