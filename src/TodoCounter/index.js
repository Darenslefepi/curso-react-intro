import React from 'react';
import { TodoContext } from '../TodoContex';
import './TodoCounter.css';

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext)
    return ( 
        <h1 className='TodoCounter'>
            <span>{completedTodos}</span> Tareas Completadas de <span>{totalTodos}</span>
        </h1>
    );
}

export { TodoCounter };