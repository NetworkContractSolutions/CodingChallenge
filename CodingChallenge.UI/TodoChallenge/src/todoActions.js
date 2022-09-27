import todoSvc from './TodoService';

export const TODO_TEXT_CHANGE = 'TODO_ACTION/TODO_TEXT_CHANGE';
export const TODO_COMPLETE_CHANGE = 'TODO_ACTION/TODO_COMPLETE_CHANGE';
export const GET_TODOS_SUCCESS = 'TODO_ACTION/GET_TODOS_SUCCESS';
export const ADD_TODO_CHANGE = 'ADD_TODO_CHANGE';
export const SORT_TODOS = 'SORT_TODOS';

export const completeTodo = todo => {
  return dispatch =>
    todoSvc.updateTodo(todo).then(() => {
      return dispatch({
        type: TODO_COMPLETE_CHANGE,
        isComplete: todo.isComplete,
        id: todo.id,
      });
    });
};

export const updateTextTodo = todo => {
  return dispatch =>
    todoSvc.updateTodo(todo).then(() => {
      return dispatch({
        type: TODO_TEXT_CHANGE,
        text: todo.text,
        id: todo.id,
        dueDate: todo.dueDate,
      });
    });
};

export const addTodo = newTodo => {
  return dispatch =>
    todoSvc.addTodo(newTodo).then(todo => {
      return dispatch({
        type: ADD_TODO_CHANGE,
        todo,
      });
    });
};

export const getTodos = () => {
  return dispatch =>
    todoSvc.getTodos().then(todos => {
      return dispatch({ type: GET_TODOS_SUCCESS, todos });
    });
};
