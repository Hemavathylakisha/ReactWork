import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Counter from './components/Counter';
import CounterChange from './components/CounterChange';
import product from './components/Product';
import {Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Link to={"/counter"}>Counter</Link> |&nbsp;
    <Link to={"/counterchange"}>Counter Change</Link>|&nbsp;
    <Link to={"/product"}>Product</Link>
     <Outlet />
    </>
  )
}

export default App
