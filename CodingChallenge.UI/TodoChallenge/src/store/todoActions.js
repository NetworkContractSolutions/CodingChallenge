import todoSvc from "../services/TodoService";

export const TODO_TEXT_CHANGE = "TODO_ACTION/TODO_TEXT_CHANGE";
export const TODO_COMPLETE_CHANGE = "TODO_ACTION/TODO_COMPLETE_CHANGE";
export const GET_TODOS_SUCCESS = "TODO_ACTION/GET_TODOS_SUCCESS";
export const TODO_ADD_SUCCESS = "TODO_ACTION/TODO_ADD_SUCCESS";
export const DELETE_TODO = "TODO_ACTION/DELETE_TODO";

export const completeTodo = (todo) => {
    return (dispatch) => (
        todoSvc.updateTodo(todo)
            .then(() => {
                return dispatch({type: TODO_COMPLETE_CHANGE, isComplete: todo.isComplete, id: todo.id })
            })
    );
};
export const updateTextTodo = (text, id) => {
    return (dispatch) =>
      todoSvc.updateTextTodo(text, id).then(() => {
        return dispatch({ type: TODO_TEXT_CHANGE, text, id });
      });
  };
  
export const getTodos = () => {
    return (dispatch) => (
        todoSvc.getTodos()
            .then(todos => {
                return dispatch({type: GET_TODOS_SUCCESS, todos })
            })
    );
}


export const addTodo = (name,dueDate) => {
    return (dispatch) => (
        todoSvc.addTodo(name,dueDate).then(todo => {
                return dispatch({type: TODO_ADD_SUCCESS, todo })
            })
    );
}

export const deleteTodo = (id) => {
    return (dispatch) => {
      todoSvc.deleteTodo(id).then((id) => {
        return dispatch({ type: DELETE_TODO, id });
      });
    };
  };
