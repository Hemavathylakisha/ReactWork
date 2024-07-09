import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from '../redux/todo/todoReducer'

export default configureStore({
  reducer: {
    todos: ToDoReducer,
  },
})