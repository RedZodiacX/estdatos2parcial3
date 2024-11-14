import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../store/slices/todoSlice';

const TodoApp = () => {
    const [inputValue, setInputValue] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch(addTodo({ id: Date.now(), text: inputValue, completed: false }));
            setInputValue('');
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Todo Lista</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Agrear un nuevo todo"
            />
            <button onClick={handleAddTodo}>Agregar Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Borrar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;