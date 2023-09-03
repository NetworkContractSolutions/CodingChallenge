import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { TodoModel } from "../../TodoModel";
import './Todo.scss';

import { MdOutlineEdit } from 'react-icons/md';
import { FaRegCheckCircle, FaTrash, FaTrashRestore } from 'react-icons/fa';
import { FaRegCircleXmark } from 'react-icons/fa6';

const Todo = ({ todo, onTextChange, onCompleteChange }) => {
    const [editing, setEditing] = useState(false);
    const [editingText, setEditingText] = useState(todo.text);

    const toggleComplete = () => {
        onCompleteChange({ ...todo, isComplete: !todo.isComplete });
    }

    const toggleEditText = () => {
        if (editing) setEditingText(todo.text);
        setEditing(!editing);
    }

    const saveText = () => {
        if (!editing) return;
        onTextChange(editingText, todo.id);
        toggleEditText();
    };

    const onChangeEditText = (event) => {
        setEditingText(event.target.value);
    }

    useEffect(() => {
        setEditingText(todo.text);
    }, [todo])

    // TODO: Add ability to edit due date.
    const editView = (
        <>
            <div><input onChange={onChangeEditText} value={editingText}></input></div>
            <div className='todo-item controls'>
                <button onClick={saveText} className={"btn--default btn--base green"}><FaRegCheckCircle /></button>
                <button onClick={toggleEditText} className={"btn--default btn--base red"}><FaRegCircleXmark /></button>
            </div>
        </>
    )

    const normalView = (
        <>
            <div>{todo.text}</div>
            <div className='todo-item controls'>
                {!todo.isComplete && <button onClick={toggleEditText} className={"btn--default btn--base"}><MdOutlineEdit /></button>}
                <button onClick={toggleComplete} className={"btn--default btn--base"}>{todo.isComplete ? <FaTrashRestore /> : <FaTrash />}</button>
            </div>
        </>
    )

    return (
        <div className={`todo-item ${todo.isComplete ? 'complete' : 'incomplete'}`}>
            {editing ? editView : normalView}
        </div>
    )
}

// Just use TypeScript...
Todo.propTypes = {
    todo: PropTypes.shape(TodoModel),
    onTextChange: PropTypes.func,
    onCompleteChange: PropTypes.func
};

export default Todo;