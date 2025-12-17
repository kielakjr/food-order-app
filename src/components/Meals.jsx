import React from 'react'
import { useState, useEffect } from 'react'
import Meal from './Meal'

const Meals = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    const fetchMeals = async () => {
      try {
        const response = await fetch('http://localhost:3000/meals')
        if (!response.ok) {
          throw new Error('Failed to fetch meals.')
        }
        const data = await response.json();
        setMeals(data);
      } catch (err) {
        setError(err.message);
      }
      setIsFetching(false);
    }
    fetchMeals();
  }, [])


  return (
    <div>
      {isFetching && <p>Loading meals...</p>}
      {error && <p>{error}</p>}
      {!isFetching && !error && (
        <ul id="meals">
          {meals.map((meal) => (
            <Meal key={meal.id} name={meal.name} price={meal.price} description={meal.description} image={meal.image} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Meals
