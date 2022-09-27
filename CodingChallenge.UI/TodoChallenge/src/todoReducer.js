import {
  GET_TODOS_SUCCESS,
  TODO_COMPLETE_CHANGE,
  TODO_TEXT_CHANGE,
  ADD_TODO_CHANGE,
  SORT_TODOS,
} from './todoActions';

export const reducer = (state, action) => {
  switch (action.type) {
    case TODO_TEXT_CHANGE: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, text: action.text, dueDate: action.dueDate }
            : todo,
        ),
      };
    }

    case TODO_COMPLETE_CHANGE: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, isComplete: action.isComplete }
            : todo,
        ),
      };
    }

    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: action.todos,
      };
    }

    case ADD_TODO_CHANGE: {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    }

    case SORT_TODOS: {
      return {
        ...state,
        todos: [...sortTodos(state.todos)],
      };
    }

    default:
      return state;
  }
};

const sortTodos = todos => {
  return [...todos].sort((a, b) => {
    if (a.dueDate < b.dueDate) return -1;
    if (a.dueDate > b.dueDate) return 1;

    return 0;
  });
};
