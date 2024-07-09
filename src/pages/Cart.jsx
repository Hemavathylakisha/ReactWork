import React from 'react';
import Product from './Product';

function Cart({cart, removeFromCart}) {
  return (
    <>
       <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => removeFromCart(product.id)} className='button'>Remove from Cart</button>
          </div>
        ))
      )}
    </>
  );
}

export default Cart;
