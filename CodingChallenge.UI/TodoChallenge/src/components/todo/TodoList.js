import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { TodoListModel } from '../../TodoModel';
import { connect } from 'react-redux';
import {
  completeTodo,
  getTodos,
  updateTextTodo,
  SORT_TODOS,
} from '../../todoActions';

import './todo.scss';

const TodoList = ({
  todos,
  getTodos,
  onTodoTextChange,
  onTodoCompleteChange,
  sortTodos,
}) => {
  const [filtered, setFiltered] = useState(true);

  const filterByOnChange = () => {
    setFiltered(!filtered);
  };

  const sortByDateOnClick = () => {
    sortTodos();
  };

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const renderTodoList = todos => {
    return todos.filter(filterTodos).map(mapTodoObjectToComponent);
  };
  const filterTodos = todo => (filtered ? !todo.isComplete : true);
  const mapTodoObjectToComponent = (todo, i) => (
    <Todo
      key={i}
      todo={todo}
      onTextChange={onTodoTextChange}
      onCompleteChange={onTodoCompleteChange}
    />
  );

  return (
    <div className="todo-list">
      <span>Filter by complete</span>
      <input
        type="checkbox"
        defaultChecked={filtered}
        onChange={filterByOnChange}
      />
      <br />
      <button className={'btn--default'} onClick={sortByDateOnClick}>
        Sort by date
      </button>
      <div className="todo-container">{renderTodoList(todos)}</div>
    </div>
  );
};

TodoList.propTypes = TodoListModel;

const mapStateToProps = state => ({
  todos: state.todos ?? [],
});

const mapDispatchToProps = dispatch => ({
  onTodoTextChange: todo => dispatch(updateTextTodo(todo)),
  onTodoCompleteChange: todo => dispatch(completeTodo(todo)),
  getTodos: () => dispatch(getTodos()),
  sortTodos: () => dispatch({ type: SORT_TODOS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
