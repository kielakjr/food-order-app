import React from 'react'
import Navbar from './components/Navbar'
import Meals from './components/Meals'
import CartProvider from './store/cart-context'

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Meals />
    </CartProvider>
  )
}

export default App
