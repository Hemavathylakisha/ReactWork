import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import CreateItem from './components/CreateItem';
import EditItem from './components/EditItem';

function App() {
  return (
      <Router>
          <div className='App'>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/create" element={<CreateItem />} />
                  <Route path="/edit/:id" element={<EditItem />} />
              </Routes>
          </div>
      </Router> 
  )
}

export default App
