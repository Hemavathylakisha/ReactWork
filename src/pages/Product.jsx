import React from 'react';

function Product({product, addToCart}) {
  if (!product) {
    return null; // or return some fallback UI
  }

  return (
    <>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)} className='button'>Add to Cart</button>
    </>
  );
}

export default Product;
