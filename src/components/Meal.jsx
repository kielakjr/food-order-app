import React from 'react'

const Meal = ( { name, price, description, image}) => {
  return (
    <li className="meal-item">
      <img src={`http://localhost:3000/${image}`} alt={name} />
      <h3>{name}</h3>
      <span className="meal-item-price">${price}</span>
      <span className="meal-item-description">{description}</span>
    </li>
  )
}

export default Meal
