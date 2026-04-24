import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { Edit, CheckCircle, XCircle, Tag } from 'react-feather';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Todo = ({ todo, onCompleteChange, onTextChange }) => {
  const [editing, setEditing] = useState(false);
  const [editingText, setEditingText] = useState(todo.text);
  const [editingDueDate, setEditingDueDate] = useState(todo.dueDate);

  const toggleComplete = () => {
    onCompleteChange({
      ...todo,
      isComplete: !todo.isComplete,
    });
  };

  const toggleEditText = () => {
    setEditing(!editing);
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

  const onChangeEditText = (event) => {
    setEditingText(event.target.value);
  };

  const onChangeEditDueDate = (date) => {
    setEditingDueDate(date);
  };

  const displayText = () => {
    if (editing) {
      return (
        <div className="edit-container">
          <input
            type="text"
            onChange={onChangeEditText}
            value={editingText}
            className="todo-item--input"
          />
          <DatePicker showIcon selected={editingDueDate} onChange={onChangeEditDueDate} />
        </div>
      );
    } else {
      return (
        <div>
          {todo.text}
          <br />
          Due By: <em>{todo.dueDate && todo.dueDate.toLocaleDateString('en-US')}</em>
        </div>
      );
    }
  };

  const getClassName = () => {
    const { isComplete } = todo;
    return `todo-item ${isComplete ? 'complete' : 'incomplete'}`;
  };

  return (
    <div className={`${getClassName()} todo-item--container`}>
      {displayText()}
      <div className="actions">
        {editing ? (
          <button onClick={saveText} className="btn--default btn--icon">
            <CheckCircle width={18} color="#0088FE" />
          </button>
        ) : (
          <button onClick={toggleComplete} className="btn--default btn--icon">
            <Tag width={18} />
          </button>
        )}
        {editing ? (
          <button onClick={toggleEditText} className="btn--default btn--icon">
            <XCircle width={18} color="#FE331D" />
          </button>
        ) : (
          <button onClick={toggleEditText} className="btn--default btn--icon">
            <Edit width={18} />
          </button>
        )}
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    dueDate: PropTypes.instanceOf(Date),
    isComplete: PropTypes.bool,
  }),
  onTextChange: PropTypes.func,
  onCompleteChange: PropTypes.func,
};

export default Todo;