import React, { useState } from 'react';
import Productlist from './Productlist';
import Cart from './Cart';
import TotalPrice from './TotalPrice';

const ProductMain = () =>  {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
      setCart([...cart, product]);
      setTotalPrice(prevTotal => prevTotal + product.price);
    };
  
    const removeFromCart = (productId) => {
      const productToRemove = cart.find(product => product.id === productId);
      if (productToRemove) {
        setCart(cart.filter(product => product.id !== productId));
        setTotalPrice(prevTotal => prevTotal - productToRemove.price);
      }
    };
  
  return (
    <div className="contentbox">
        <Productlist addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
        <TotalPrice totalPrice={totalPrice} />
    </div>
  );
}

export default ProductMain;
