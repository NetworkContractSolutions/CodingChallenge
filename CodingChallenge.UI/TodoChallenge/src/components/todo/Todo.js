import React, {useState} from 'react';
import {TodoModel} from "../../TodoModel";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faFloppyDisk, faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import './todo.scss';

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
        toggleEditText();
    };

    const onChangeEditText = (event) => {
        setStateEditText(event.target.value);
    }

    const displayText = () => {
        if (editing) {
            return (<div><input onChange={onChangeEditText} value={editingText}></input></div>)
        }
        else {
            return (<div>{props.todo.text}</div>);
        }
    }

    const displayDueDate = () => {
        return (<div>{props.todo.dueDate}</div>);
    }

    const getClassName = () => {
        const {isComplete} = props.todo;
        return `todo-item ${isComplete ? 'complete' : 'incomplete'}`;
    }

    return (
        <div className={getClassName()}>
            <div className='todo-text'>
                {displayText()}
                {displayDueDate()}
            </div>
            {editing
                ? 
                <div>
                    <button onClick={toggleEditText} className={"btn--default btn--base"}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                    <button onClick={saveText} className={"btn--default btn--base"}>
                        <FontAwesomeIcon icon={faFloppyDisk} />
                  </button>
                </div>
                : <div>
                    <button onClick={toggleComplete} className={"btn--default btn--base"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button onClick={toggleEditText} className={"btn--default btn--base"}>
                        <FontAwesomeIcon icon={faPen} />
                     </button> 
                </div>
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