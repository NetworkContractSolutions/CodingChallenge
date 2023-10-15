import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import dayjs from "dayjs";

import Todo from "../todo";
import {TodoListModel} from "../../models/TodoModel";
import {completeTodo, getTodos, updateTextTodo,deleteTodo} from "../../store/todoActions";

//styles
import styles from "./styles.module.scss";

export const TodoList = ({
  todos,
  getTodos,
  onTodoTextChange,
  onTodoCompleteChange,
  onTodoDelete,
}) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const renderTodoList = (todos) => {
    return todos
      .sort((a, b) => (dayjs(a.dueDate).isBefore(dayjs(b.dueDate)) ? 1 : -1))
      .map(mapTodoObjectToComponent);
  };

  const mapTodoObjectToComponent = (todo) => (
    <li key={todo.id}>
      <Todo
        todo={todo}
        onTextChange={onTodoTextChange}
        onCompleteChange={onTodoCompleteChange}
        onTodoDelete={onTodoDelete}
      />
    </li>
  );

  return <ul className={styles.container}>{renderTodoList(todos)}</ul>;
};

TodoList.propTypes = TodoListModel;

const mapStateToProps = (state) => ({
  todos: state.todos ?? [],
});

const mapDispatchToProps = (dispatch) => ({
  onTodoTextChange: (text, id) => dispatch(updateTextTodo(text, id)),
  onTodoCompleteChange: (todo) => dispatch(completeTodo(todo)),
  getTodos: () => dispatch(getTodos()),
  onTodoDelete: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);