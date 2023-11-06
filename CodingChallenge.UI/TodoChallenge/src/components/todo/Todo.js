import React, { useState } from 'react';
import { TodoModel } from "../../TodoModel";
import PropTypes from "prop-types";
import './todo.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Todo = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingText, setEditingText] = useState(props.todo.text);

    const toggleComplete = () => {
        props.onCompleteChange({ ...props.todo, isComplete: !props.todo.isComplete });
    }

    const toggleEditText = () => {
        setIsEditing(!isEditing);
    }

    const saveText = () => {
        if (!isEditing) return;
        props.onTextChange({ ...props.todo, text: editingText });
        toggleEditText();
    };

    const getClassName = () => {
        const { isComplete } = props.todo;
        return `todo-item ${isComplete ? 'complete' : 'incomplete'}`;
    }

    return (
        <div className={getClassName()}>
            {isEditing ?
                <TodoEditMode setEditingText={setEditingText} editingText={editingText} saveText={saveText} toggleEditText={toggleEditText} />
                : <TodoReadOnlyMode text={props.todo.text} toggleComplete={toggleComplete} toggleEditText={toggleEditText} />}
        </div>
    )
}

const TodoEditMode = ({ setEditingText, editingText, saveText, toggleEditText }) => {
    return (
        <>
            <input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText}></input>
            <IconButton onClick={saveText} className={"btn--default btn--base"}><CheckCircleOutlineIcon /></IconButton>
            <IconButton onClick={toggleEditText} className={"btn--default btn--destructive"}><CancelOutlinedIcon /></IconButton>
        </>
    )
}

const TodoReadOnlyMode = ({ text, toggleComplete, toggleEditText }) => {
    return (
        <>
            {text}
            <IconButton onClick={toggleComplete} className={"btn--default btn--destructive"}><DeleteIcon /></IconButton>
            <IconButton onClick={toggleEditText} className={"btn--default btn--base"}><ModeEditIcon /></IconButton>
        </>
    )
}

Todo.propTypes = {
    todo: PropTypes.shape(TodoModel),
    onTextChange: PropTypes.func,
    onCompleteChange: PropTypes.func
};

export default Todo;