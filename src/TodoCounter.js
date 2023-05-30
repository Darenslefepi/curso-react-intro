import './TodoCounter.css';

function TodoCounter({completed, total}) {
    return ( 
        <h1 className='TodoCounter'>
            <span>{completed}</span> Tareas Completadas de <span>{total}</span>
        </h1>
    );
}

export { TodoCounter };