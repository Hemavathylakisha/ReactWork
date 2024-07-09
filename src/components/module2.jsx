import React, {useState} from 'react';

function HelpForm() {
    const [todoText,setTodoText] = useState('');
    const handleInputChange = (event)=>{
        setTodoText(event.target.value);
    }
  return (
    <div>         
               <div   class="contentbox">
                <h3>Input text Rendering in paragraph</h3>
                       <p>{todoText}</p>
                       <input
                        type="text"
                        value={todoText}
                        onChange={handleInputChange}
                        placeholder="Enter your todo"
                    />

              </div>
    </div>
  );
}

export default HelpForm;
