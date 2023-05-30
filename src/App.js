import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// const defaulTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Hacer Curso React.js', completed: false},
//   { text: 'Llorar con chago', completed: false},
//   { text: 'Ganar a tresegue', completed: false},
//   { text: 'Jugar GOD OF WAR', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaulTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parseTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parseTodos = [];
  } else {
    parseTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parseTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchdTodos = todos.filter((todo) => (
    todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())));
    /* los metodos tolowercase y el otro son para que encuentre coiicidencias sin importar si son mayusculas o minisculas */
  
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  /* lo de arriba hace que los cambios se guarden y generen un nuevo array */
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1)/* para que la x borre el todo */
    saveTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}/>
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchdTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}/* se hace doble funcion para que react no crachee ya que a react no le gusta que envie los parentisis en la primera function */
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;


