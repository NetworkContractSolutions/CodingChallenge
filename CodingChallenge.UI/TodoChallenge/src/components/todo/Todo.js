import React, { useState } from 'react';
import { TodoModel } from '../../TodoModel';
import PropTypes from 'prop-types';
import { SaveSvg, ToggleSvg, EditSvg } from '../../icons';

const Todo = ({ todo, onCompleteChange, onTextChange }) => {
  const [editing, setStateEditing] = useState(false);
  const [editingText, setStateEditText] = useState(todo.text);
  const [editingDueDate, setStateEditDueDate] = useState(todo.dueDate);

  const toggleComplete = () => {
    onCompleteChange({
      ...todo,
      isComplete: !todo.isComplete,
    });
  };

  const toggleEditText = () => {
    setStateEditing(!editing);
  };

  const saveText = () => {
    if (!editing) return;
    onTextChange({
      ...todo,
      text: editingText,
      dueDate: editingDueDate,
    });
    toggleEditText();
  };

  const onChangeEditText = event => {
    setStateEditText(event.target.value);
  };

  const onChangeEditDueDate = event => {
    setStateEditDueDate(event.target.value);
  };

  const displayText = () => {
    if (editing) {
      return (
        <>
          <input
            type="text"
            onChange={onChangeEditText}
            value={editingText}
            className="todo-item--input"
          ></input>
          <input
            type="date"
            onChange={onChangeEditDueDate}
            value={editingDueDate}
            className="todo-item--input"
          ></input>
        </>
      );
    } else {
      return (
        <>
          {todo.text}
          <br />
          Due By: <em>{todo.dueDate}</em>
        </>
      );
    }
  };

  const getClassName = () => {
    const { isComplete } = todo;
    return `todo-item ${isComplete ? 'complete' : 'incomplete'}`;
  };

  return (
    <div className={`${getClassName()} todo-item--container`}>
      <div>{displayText()}</div>
      <div>
        <button onClick={toggleComplete} className={'btn--default btn--svg'}>
          <ToggleSvg />
        </button>
        {editing ? (
          <button onClick={saveText} className={'btn--default btn--svg'}>
            <SaveSvg />
          </button>
        ) : (
          <button onClick={toggleEditText} className={'btn--default btn--svg'}>
            <EditSvg />
          </button>
        )}
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape(TodoModel),
  onTextChange: PropTypes.func,
  onCompleteChange: PropTypes.func,
};

export default Todo;
