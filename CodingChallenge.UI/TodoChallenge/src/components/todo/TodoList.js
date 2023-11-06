import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import {
  completeTodo,
  getTodos,
  updateTextTodo,
} from '../../todoActions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import './todo.scss';
import './TodoList.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos ?? []);
  const [filtered, setFiltered] = useState(true);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const toggleFilter = () => {
    setFiltered(!filtered);
  };

  const filterTodos = (todo) => (filtered ? !todo.isComplete : true);

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.dueDate === b.dueDate) return 0;
    return a.dueDate < b.dueDate ? -1 : 1;
  });

  const handleTextChange = (updatedTodo) => {
    dispatch(updateTextTodo(updatedTodo));
  };

  const handleCompleteChange = (updatedTodo) => {
    dispatch(completeTodo(updatedTodo));
  };

  return (
    <div className="todo-list">
      <div className="filter-container">
        <label htmlFor="filterByComplete">Filter by complete</label>
        <input
          id="filterByComplete"
          type="checkbox"
          checked={filtered}
          onChange={toggleFilter}
        />
      </div>
      <div className="todo-container">
        <TransitionGroup>
          {sortedTodos.filter(filterTodos).map((todo) => (
            <CSSTransition
              key={todo.id}
              timeout={150}
              classNames="fade"
            >
              <Todo
                todo={todo}
                onTextChange={handleTextChange}
                onCompleteChange={handleCompleteChange}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default TodoList;