import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FiArrowDownLeft, FiSquare, FiCheckSquare } from 'react-icons/fi'
import './styles.css';
import logo from '../../assets/images/darth-vader.svg'
import api from '../../services/api';


interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {

  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    api.get('todos').then(({ data }) => {
      setTodos(data)
    });
  }, []);

  function handleClick(id: number) {
    let toDoList = [...todos];
    const index = toDoList.findIndex(item => item.id === id);
    toDoList[index].completed = !toDoList[index].completed;
    setTodos(toDoList);
  }

  return (
    <div id="page-todos">
      <img src={logo} className="logo" alt="ProjetoFramework" />
      <header>
        <Link to="/">
          <FiArrowDownLeft />
          Home
        </Link>
        <Link to="/posts">
          Postagens
        </Link>
        <Link to="/albuns">
          Albuns
        </Link>
      </header>
      <div id="todos">
        <h1>TO-DOs</h1>
        <div className="field">
          <ul className="items-to-do">
            {todos.map(todo => (
              <li key={todo.id} onClick={() => handleClick(todo.id)}>
                {todo.completed ? <FiCheckSquare /> : <FiSquare />}
                <span>{todo.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}


export default Todos