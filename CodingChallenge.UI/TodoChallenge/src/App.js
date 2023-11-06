import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './components/todo/TodoList';
import { addTodo } from './todoActions';
import './App.scss';
import './button.scss';
import PieChartComponent from "./components/PieChart";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos ?? []);

  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleDateChange = (date) => {
    setDueDate(date);
  }

  const addNewTodo = () => {
    dispatch(addTodo({ text, dueDate }));
    setText('');
    setDueDate(new Date());
  };

  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="header-section">
        <PieChartComponent todos={todos} />
        <div className="control-bar">
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            className="text"
            placeholder="Enter todo..."
          />
          <DatePicker selected={dueDate} onChange={handleDateChange} />
          <button className="btn--default" onClick={addNewTodo}>
            Add
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default App;