import React, { useState } from 'react';
import { addToDo } from '../redux/todo/todoReducer';
import { useDispatch } from 'react-redux';

function TodoInput() {
    const [text, setText] = useState('');
    const dispatch =useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    if(text.trim()){
        dispatch(addToDo(text));
        setText('');
    }
    };

  return (
    <form onSubmit={handleSubmit}>
       <input value={text} placeholder='Enter your text' 
       onChange={(e)=>setText(e.target.value)}/><br />
       <button type="submit" className='button'>Submit</button>
    </form>
  );
}

export default TodoInput;
