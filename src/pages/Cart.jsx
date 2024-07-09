import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Cart() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cart`);
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
        const cartData = localStorage.getItem('cart');
        if (cartData) {
          try {
            setCart(JSON.parse(cartData));
          } catch (error) {
            console.error("Error parsing cart data from localStorage:", error);
            setCart([]);
          }
        }
      }
    };
    fetchCart();
  }, []);

  const handleCheckout = async () => {
    // Handle checkout logic //assignment
    try {
      const response = await axios.post('http://localhost:5000/checkout/', { cart });
      alert("Checkout successful!", response.data);
      setCart([]);
      localStorage.removeItem('cart');
      alert("removed item from cart");
      navigate('/checkout');
    } catch (error) {
      console.error('Error during checkout:', error);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <div className='contentbox'>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} id="heightfix">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <button onClick={handleCheckout} className='button'>Checkout</button>
      )}
    </div>
  );
}

export default Cart;