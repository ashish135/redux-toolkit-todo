import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../../features/todo/todoSlice'
function Todos() {
    const todos = useSelector( (state)=> state.todoStore.todos)
    const dispatch = useDispatch();
    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }
  return (
    <div><h3>Todos</h3>
    {todos && todos.map((todo)=><li key={todo.id}>{todo.name} <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button></li>)}
    </div>
  )
}

export default Todos