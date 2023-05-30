import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
    return (
        <input 
        placeholder="Eres Experto en GOD OF WAR"
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => {
            /* console.log('escribiste en el todosearch')
            console.log(event)
            console.log(event.target)
            console.log(event.target.value);
            console.log((event.target.value)*2); */
            setSearchValue(event.target.value)
        }}
        />
    );
}

export { TodoSearch };