import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsById, fetchProducts } from '../redux/product/productReducer';

function Product() {
    const {loading, products, productData, errorMessage} = useSelector(store => store.product);
    const dispatch = useDispatch();
    
    const handleFetchProductsById = () =>{
      dispatch(fetchProductsById(1));
    }

    useEffect(()=>{
        if(products.length === 0){
      //   fetch('https://dummyjson.com/products')
      //   .then(res => res.json())
      //  .then(data => dispatch(addProducts(data.products)));      
      dispatch(fetchProducts());
    }
    },[products])

    // if(loading){
    //   return <h1>Loading...</h1>
    // }
  return (
    <div>
      <h2>Product</h2>
      {loading && <h1>Loading...</h1>}
      {errorMessage && <p>{errorMessage}</p>      
      }  
      {
        products.length > 0 &&   
        <p>Total Product: {products.length}</p>
      }   
      <button onClick={handleFetchProductsById}>FetchProductById</button>
      {productData && <h1>{productData.title}</h1>}
    </div>
  );
}

export default Product;
