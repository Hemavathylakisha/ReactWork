import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleToDo } from '../redux/todo/todoReducer';

function TodoList() {
const todos = useSelector((state)=> state.todos);
const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) =>(
        <li key={todo.id} onClick={()=>dispatch(toggleToDo(todo.id))}
        style={{textDecoration : todo.completed ? 'line-through' : 'none'}}
        >
            {todo.text}
        </li> 

      ))}
    </ul>
  );
}

export default TodoList;
