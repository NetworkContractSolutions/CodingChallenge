import React, { useState } from "react";

//models
import { TodoModel } from "../../models/todo";

//components
import Button from "../button";

//utils
import PropTypes from "prop-types";
import dayjs from "dayjs";

//styles
import styles from "./styles.module.scss";
import {
  MdOutlineCancel,
  MdEdit,
  MdCheck,
  MdOutlineDeleteForever,
} from "react-icons/md";
import classNames from "classnames";

const Todo = (props) => {
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
        {props.todo.dueDate && dayjs(props.todo.dueDate).format("DD.MM.YYYY")}
      </span>
      <div className={styles.actions}>
        {editing ? (
          <div>
            <Button onClick={saveText} type="base">
              <MdCheck size={20} />
            </Button>
            <Button onClick={saveText} type="base">
              <MdOutlineCancel size={20} />
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={toggleEditText} type="base">
              <MdEdit size={20} />
            </Button>

            <Button onClick={deleteTodo} type="base">
              <MdOutlineDeleteForever size={20} />
            </Button>
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
