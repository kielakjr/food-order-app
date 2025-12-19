import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const updateAmount = () => {
    setTotalAmount(items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2));
  }

  useEffect(() => {
    updateAmount();
  }, [items]);


  const addItemToCartHandler = (meal) => {
    const item = { ...meal, quantity: 1 };
    setItems((prevItems) => {
      if (prevItems.find((it) => it.id === item.id)) {
        return prevItems.map((it) =>
          it.id === item.id ? { ...it, quantity: it.quantity + 1 } : it
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((it) => it.id === id);
      if (existingItem.quantity === 1) {
        return prevItems.filter((it) => it.id !== id);
      } else {
        return prevItems.map((it) =>
          it.id === id ? { ...it, quantity: it.quantity - 1 } : it
        );
      }
    });
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
