import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, name: "Hello"}]
};

export const createTodo = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( t => t.id !== action.payload)
        },
        updateTodo: (state, action) => {
            
        }
    }
});

export const {addTodo, removeTodo} = createTodo.actions

export default createTodo.reducer