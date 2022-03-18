import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css'
const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, [])

    return (
        <div>
            <h2>My Todo List</h2>
            <div id='todo-container'>
                {
                    todos.map(todo => <Todo todo={todo} key={todo.id}></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;