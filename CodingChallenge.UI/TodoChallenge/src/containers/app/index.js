import React, { useState } from "react";

//redux
import { connect } from "react-redux";
import { addTodo } from "../../store/todo/actions";

//components
import TodoList from "../../components/todo-list";
import Button from "../../components/button";
import CircularProgressBar from "../../components/circular-progress";

//styles
import styles from "./styles.module.scss";
import dayjs from "dayjs";

const today = dayjs().format("YYYY-MM-DD");

const App = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [dueDate, setDueDate] = useState(today);
  const [errorMessage, setErrorMessage] = useState("");

  const textInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const dateInputChange = (e) => {
    setDueDate(e.target.value);
  };

  const addNewTodo = () => {
    setErrorMessage("");
    if (newTodo.trim() && dueDate) {
      props.onAddNewTodo(newTodo, dueDate);
      setNewTodo("");
      setDueDate(today);
    } else {
      setErrorMessage("Name and due date is required");
    }
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles["header__title"]}>Todo App</h1>
      </header>
      <CircularProgressBar
        maxValue={props.todos.length}
        value={props.completedTodos.length}
      />
      <section className={styles["add-todo"]}>
        <input
          className={styles["add-todo__input"]}
          type="text"
          value={newTodo}
          onChange={textInputChange}
        ></input>
        <div className={styles["add-todo__date-picker"]}>
          <label className={styles["add-todo__date-picker__label"]}>
            Due date
          </label>
          <input
            type="date"
            value={dueDate}
            className={styles["add-todo__date-picker__input"]}
            onChange={dateInputChange}
          />
        </div>
        <Button className={styles["add-todo__button"]} onClick={addNewTodo}>
          Add
        </Button>
      </section>
      {errorMessage && (
        <p className={styles["error-message"]}>{errorMessage}</p>
      )}
      <TodoList />
    </main>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos ?? [],
  completedTodos: (state.todos ?? []).filter((item) => item.isComplete),
});

const mapDispatchToProps = (dispatch) => ({
  onAddNewTodo: (text, dueDate) => dispatch(addTodo(text, dueDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
