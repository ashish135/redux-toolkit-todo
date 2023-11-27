import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';
function AddTodo() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text))
        setText('');
    }
  return (
    <div>
        <h1 className="text-3 font-bold">
            Hello world!
        </h1>
        <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setText(e.target.value)} type='text' value={text} id='todoField' className='border-solid border-2 border-indigo-600' />
        <button type='submit' className='bg-pink-600 p-2'>Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo