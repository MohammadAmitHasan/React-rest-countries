import React from 'react';
import './Todo.css'
const Todo = (props) => {
    // console.log(props);
    return (
        <div className='todo'>
            <h3><span className='title-color'>Title:</span> {props.todo.title}</h3>
            <h3><span className='title-color'>Status:</span> {props.todo.completed.toString()}</h3>
        </div>
    );
};

export default Todo;