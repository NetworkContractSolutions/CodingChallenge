import React, {useState,useEffect,Component} from 'react';
import { connect } from "react-redux";
import TodoList  from "../../components/todo-list";
import AddTodo from "../../components/todo/AddTodo";
import styles from"./styles.module.scss";
import Chart from "../../components/chart";

const App = () => {

    return (
      <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles["header__title"]}>Todo App</h1>
      </header>
       <Chart/>
       <AddTodo /> 
       <TodoList />  
      </main>
)};

export default connect()(App);
