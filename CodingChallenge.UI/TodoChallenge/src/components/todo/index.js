 import React, {useState} from 'react';

 import PropTypes from "prop-types";
 import dayjs from "dayjs";

 import DeleteIcon from '@mui/icons-material/Delete';
 import IconButton from '@mui/material/IconButton';
 import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
 import CancelIcon from '@mui/icons-material/Cancel';
 import EditIcon from '@mui/icons-material/Edit';

 import styles from './styles.module.scss';
 import classNames from "classnames";

 import {TodoModel} from "../../models/TodoModel";

 export const Todo = (props) => {
  const [editing, setStateEditing] = useState(false);
  const [editingText, setStateEditText] = useState(props.todo.text);

  const toggleComplete = () => {
    props.onCompleteChange({
      ...props.todo,
      isComplete: !props.todo.isComplete,
    });
  };

  const toggleEditText = () => {
    setStateEditing(!editing);
  };

  const saveText = () => {
    if (!editing) return;
    props.onTextChange(editingText, props.todo.id);
    toggleEditText();
  };

  const onChangeEditText = (event) => {
    setStateEditText(event.target.value);
  };

  const deleteTodo = () => {
    props.onTodoDelete(props.todo.id);
  };

  const displayText = () =>
    editing ? (
      <input
        onChange={onChangeEditText}
        value={editingText}
        className={styles.info}
      />
    ) : (
      <p className={styles.info}>{props.todo.text}</p>
    );

  return (
    <div
      className={classNames(styles.container, {
        [styles.complete]: props.todo.isComplete,
      })}
    >
      <input
        defaultChecked={props.todo.isComplete}
        onChange={toggleComplete}
        type="checkbox"
      />
      {displayText()}
      <span>
        {props.todo.dueDate && dayjs(props.todo.dueDate).format("MM.DD.YYYY")}
      </span>
      <div className={styles.actions}>
        {editing ? (
          <div>
                <IconButton aria-label="check" onClick={saveText} >
                     <CheckCircleOutlineIcon fontSize="inherit" />
                 </IconButton>

                 <IconButton aria-label="cancel" onClick={saveText} >
                     <CancelIcon fontSize="inherit" />
                 </IconButton>
          
          </div>
        ) : (
          <div>
              <IconButton aria-label="edit" onClick={toggleEditText} >
                     <EditIcon fontSize="inherit" />
                 </IconButton>

                <IconButton  aria-label="delete" onClick={deleteTodo}>
                <DeleteIcon fontSize="inherit"  />
             </IconButton> 
            
          </div>
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