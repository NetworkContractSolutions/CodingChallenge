import todoSvc from "./TodoService";

export const ADD_TODO = "TODO_ACTION/ADD_TODO";
export const TODO_TEXT_CHANGE = "TODO_ACTION/TODO_TEXT_CHANGE";
export const TODO_COMPLETE_CHANGE = "TODO_ACTION/TODO_COMPLETE_CHANGE";
export const GET_TODOS_SUCCESS = "TODO_ACTION/GET_TODOS_SUCCESS";

export const addTodo = (text, dueDate) => {
    return (dispatch) => (
        todoSvc.addTodo(text, dueDate)
            .then((todo) => {
                return dispatch({type: ADD_TODO, ...todo })
            })
    );
};

export const changeTodoText = (todo) => {
    return (dispatch) => (
        todoSvc.updateTodo(todo)
            .then(() => {
                return dispatch({type: TODO_TEXT_CHANGE, text: todo.text, id: todo.id })
            })
    );
};

export const completeTodo = (todo) => {
    return (dispatch) => (
        todoSvc.updateTodo(todo)
            .then(() => {
                return dispatch({type: TODO_COMPLETE_CHANGE, isComplete: todo.isComplete, id: todo.id })
            })
    );
};

export const getTodos = () => {
    return (dispatch) => (
        todoSvc.getTodos()
            .then(todos => {
                return dispatch({type: GET_TODOS_SUCCESS, todos })
            })
    );
}
