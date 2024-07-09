import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='container'>
        <div className='contentbox'>
          <h3>To Do App in Redux</h3>
            <TodoInput />
            <TodoList />
        </div>
    </div>
  )
}

export default App
