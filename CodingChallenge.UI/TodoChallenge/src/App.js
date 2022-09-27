import React, { useState } from 'react';
import TodoList from './components/todo/TodoList';
import { connect } from 'react-redux';
import { addTodo } from './todoActions';

import './App.scss';
import './button.scss';

const App = ({ addTodoChange }) => {
  const [newTodo, setNewTodo] = useState({
    text: '',
    dueDate: '',
  });

  const inputChange = e => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const addNewTodo = () => {
    addTodoChange(newTodo);
    setNewTodo({ text: '', dueDate: '' });
  };

  return (
    <div className="App">
      <h2>TODO App</h2>
      <input
        type="text"
        name="text"
        value={newTodo.text}
        onChange={inputChange}
      ></input>
      <input
        type="date"
        name="dueDate"
        value={newTodo.dueDate}
        onChange={inputChange}
      ></input>
      <button className={'btn--default'} onClick={addNewTodo}>
        Add
      </button>
      <TodoList />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodoChange: newTodo => dispatch(addTodo(newTodo)),
});

export default connect(null, mapDispatchToProps)(App);
