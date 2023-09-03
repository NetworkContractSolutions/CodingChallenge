import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { connect } from "react-redux";

import { TodoListModel } from "../../TodoModel";
import { addTodo, changeTodoText, completeTodo, getTodos } from "../../TodoActions";

import TodoProgress from './TodoProgress';
import TodoList from './TodoList';

import "react-datepicker/dist/react-datepicker.css";
import './button.scss';

const Todo = ({ todos, getTodos, onAddTodo, onTodoTextChange, onTodoCompleteChange }) => {

    // New todo.
    const [dueDate, setDueDate] = useState((new Date()).toISOString());
    const [newTodo, setNewTodo] = useState('');
    const textInputChange = (e) => {
        setNewTodo(e.target.value);
    }
    const handleAddTodo = () => {
        onAddTodo(newTodo, dueDate).then(() => setNewTodo('')).then(() => getTodos());
    }

    // Filter toggle.
    const [filtered, setFiltered] = useState(true);
    const filterByOnChange = () => {
        setFiltered(!filtered);
    }

    useEffect(() => {
        getTodos();
    }, [getTodos]);

    return (
        <div className="todo">
            <TodoProgress todos={todos} />

            <div className="todo-new">
                <DatePicker
                    showIcon
                    selected={new Date(dueDate)}
                    onChange={(date) => setDueDate(date.toISOString())}
                />
                <input type="text" value={newTodo} onChange={textInputChange} className={"text"}></input>
                <button className={"btn--default"} onClick={handleAddTodo} disabled={newTodo.length === 0}>Add</button>
            </div>

            <div className="todo-filter">
                <input id="todo-filter" type="checkbox" defaultChecked={filtered} onChange={filterByOnChange} />
                <label htmlFor="todo-filter" >Filter Complete</label>
            </div>

            <TodoList
                todos={todos}
                filtered={filtered}
                onTodoTextChange={onTodoTextChange}
                onTodoCompleteChange={onTodoCompleteChange}
            />
        </div>
    );
}

Todo.propTypes = TodoListModel;

const mapStateToProps = (state) => ({
    todos: state.todos ?? []
});
const mapDispatchToProps = (dispatch) => ({
    onAddTodo: (text, dueDate) => dispatch(addTodo(text, dueDate)),
    onTodoTextChange: (text, id) => dispatch(changeTodoText({ id, text })),
    onTodoCompleteChange: (todo) => dispatch(completeTodo(todo)),
    getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);