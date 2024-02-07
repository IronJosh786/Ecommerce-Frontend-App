import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0)
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    if(cart) {
      const sum = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0)
      setTotal(parseFloat(sum).toFixed(2));
    }
  }, [cart]);

  const handleIncrement = (id) => {
    setCart(cart.map(item => (
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    )));
  }

  const handleDecrement = (id) => {
    const item = cart.find(item => item.id === id);
    if(item.amount === 1) handleDelete(id);
    else {
      setCart(cart.map(item => (
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      )));
    }
  }

  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
  }

  const handleClear = () => {
    setCart([]);
  }

  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
    // check if the item is in the cart
    const cartItem = cart.find(item => {
      return item.id === id;
    })
    
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount+1}
        } 
        else {
          return item;
        }
      });
      setCart(newCart);
    }
    else {
      setCart([...cart, newItem]);
    }
  }

  return <CartContext.Provider value={{cart, addToCart, handleDecrement, handleIncrement, handleDelete, handleClear, itemAmount, total}}>{children}</CartContext.Provider>;
};

export default CartProvider;
