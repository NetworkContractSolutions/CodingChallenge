import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import dayjs from "dayjs";
import {completeTodo, getTodos,addTodo, TODO_TEXT_CHANGE} from "../../store/todoActions";
import { connect, useSelector, useDispatch  } from 'react-redux';
import styles from './styles.module.scss';

const today = dayjs().format("YYYY-MM-DD");

export const AddTodo = (props) => {
    const [newTodo, setNewTodo] = useState('');
    const [dueDate, setDueDate] = useState(today);
    const [errorMessage, setErrorMessage] = useState("");
   
    const textInputChange = (e) => {

        setNewTodo(e.target.value);
        setErrorMessage("");
     
      };

      const dateInputChange = (e) => {
        setDueDate(e.target.value);
        setErrorMessage("");
      };

      const addNewTodo = () => {

        setErrorMessage("");
        if (newTodo.trim() && dueDate ) {
          props.onAddNewTodo(newTodo, dueDate);
          setNewTodo("");
          setDueDate(today);
        } else {
          setErrorMessage(" Input is required. ");
        }
   
      }

        return (
        
          <section className={styles.container}>
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
              <Button variant="contained" onClick={addNewTodo} >Add</Button>
            </section>
            {errorMessage && (
            <p className={styles["error"]}>{errorMessage}</p>
          )}
      </section>

  );
 
    };

    const mapStateToProps = (state) => ({
        todos: state.todos ?? [],
        completedTodos: (state.todos ?? []).filter((item) => item.isComplete),
      });
      
      const mapDispatchToProps = (dispatch) => ({
        onAddNewTodo: (text,dueDate) => dispatch(addTodo(text,dueDate))
      });


    export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
