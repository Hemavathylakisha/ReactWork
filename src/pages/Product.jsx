import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartMessage, setCartMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const addCart = () => {
    const orderData = { productId: id };
    axios.post(`http://localhost:5000/cart`, orderData)
      .then(response => {
        // Store order data in local storage
        const existingOrders = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('cart', JSON.stringify([...existingOrders, response.data]));

        setCartMessage('Product added to cart!');
        navigate('/cart');
      })
      .catch(error => {
        console.error(error);
        setCartMessage('Failed to add product to cart.');
      });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className='contentbox'>
      <img src={product.image} alt={product.name} className='imgsize' />
      <div className='productinfo' id="heightfix">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button className='button' onClick={addCart}>Add to Cart</button>
        {cartMessage && <p>{cartMessage}</p>}
      </div>
    </div>
  );
}

export default Product;