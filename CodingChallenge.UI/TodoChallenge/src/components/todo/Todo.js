import React, {useState} from 'react';
import {TodoModel} from "../../TodoModel";
import PropTypes from "prop-types";
import './todo.scss';
import svc from "../../TodoService";

const Todo = (props) => {
    const [editing, setStateEditing] =  useState(false);
    const [editingText, setStateEditText] = useState(props.todo.text);


    const toggleComplete = () => {
        props.onCompleteChange({...props.todo, isComplete: !props.todo.isComplete});
    }

    const toggleEditText = () => {
        setStateEditing(!editing);
    }

    const saveText = () => {
        if (!editing) return;
        props.onTextChange(editingText, props.todo.id);
        svc.updateTodoText(editingText, props.todo.id);
        toggleEditText();
    };

    const onChangeEditText = (event) => {
        setStateEditText(event.target.value);
    }

    const displayText = () => {
        if (editing)
        {
            return <input onChange={onChangeEditText} value={editingText}></input>
        }
        else
        {
            return props.todo.text;
        }
    }
    const getClassName = () => {
        const {isComplete} = props.todo;
        return `todo-item ${isComplete ? 'complete' : 'incomplete'}`;
    }

    return (
        <div className={getClassName()}>
            {displayText()}
            <button onClick={toggleComplete} className={"btn--default btn--destructive"}>Toggle Complete</button>
            {editing
                ? <button onClick={saveText} className={"btn--default btn--base"}>Save</button>
                : <button onClick={toggleEditText} className={"btn--default btn--base"}>Edit</button>
            }
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.shape(TodoModel),
    onTextChange: PropTypes.func,
    onCompleteChange: PropTypes.func
};

export default Todo;