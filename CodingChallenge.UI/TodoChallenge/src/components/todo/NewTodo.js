import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { TodoModel } from "../../TodoModel";
import { addTodo } from "../../todoActions";
import './todo.scss';

const NewTodo = () => {
    const getCurrentDate = () => {
        const d = new Date();
        return (d.getMonth() + 1) + '/' + (d.getDate()) + '/' + (d.getFullYear());
    }

    const [newTodo, textInputChange] =  useState('');
    const [newTodoDueDate, dateInputChange] = useState(getCurrentDate());
    const dispatch = useDispatch();

    const onAddTodo = () => {
        if (newTodo.trim() !== '' && !isNaN(Date.parse(newTodoDueDate))) {
            textInputChange('');
            dateInputChange(getCurrentDate());
            dispatch(addTodo(newTodo, newTodoDueDate));
        }
    }

    return ( 
        <div>
            <div className='new-todo'>
                <input type="text" className={"new-todo-text"} value={newTodo} onChange={(e) => textInputChange(e.target.value)}></input>
                <input type="text" className={"new-todo-text new-todo-date"} value={newTodoDueDate} onChange={(e) => dateInputChange(e.target.value)}></input>
                <button className={"btn--default"} onClick={() => onAddTodo()}>Add</button>
            </div>
        </div>
    )
}

NewTodo.propTypes = {
    newTodo: PropTypes.shape(TodoModel)
};

export default NewTodo;