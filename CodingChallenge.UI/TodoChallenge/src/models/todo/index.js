import PropTypes from "prop-types";

export const TodoModel = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["MustDo", "Optional"]),
  dueDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
};

export const TodoListModel = {
  todos: PropTypes.arrayOf(PropTypes.shape(TodoModel)).isRequired,
};
