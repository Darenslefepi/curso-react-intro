import React from 'react';
import { TodoContext } from '../TodoContex';
import './TodoSearch.css';

function TodoSearch() {
    const { 
        searchValue, 
        setSearchValue 
    } = React.useContext(TodoContext)
    return (
        <input 
        placeholder="Tienes Muchas Tareas, Encuentralas Aqui"
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value)
        }}
        />
    );
}

export { TodoSearch };