import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'


function App() {

  return (
    <div className="container" id="heightfix">
   <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
   </Router>
   </div>
  )
}

export default App
