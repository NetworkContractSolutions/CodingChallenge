import PropTypes from "prop-types";

export const TodoModel = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    dueDate: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['MustDo', 'Optional'])
};

export const TodoListModel = {
    todos: PropTypes.arrayOf(PropTypes.shape(TodoModel)).isRequired
};