import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <h1>
            <button 
                className='CreateTodoButton'
                onClick={
                    (event) => {
                        console.log('le diste click')
                        console.log(event)
                        console.log(event.target)
                    }}
            >+
            </button>
        </h1>
    );
}

export { CreateTodoButton };