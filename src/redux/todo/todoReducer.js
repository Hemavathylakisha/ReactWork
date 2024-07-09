import { createSlice } from "@reduxjs/toolkit";

export const ToDoReducer = createSlice({
    name : "todos",
    initialState : [], 
    reducers : {
        addToDo : (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleToDo : (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        }
    }
})


export const {addToDo, toggleToDo} = ToDoReducer.actions;

export default ToDoReducer.reducer;