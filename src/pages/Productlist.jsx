import React from 'react';
import Product from './Product'

function Productlist({ addToCart }) {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        // Add more products here
      ];
  return (
    <>
       <h2>Product List</h2>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} name={product.name} />
      ))}
    </>
  );
}

export default Productlist;
