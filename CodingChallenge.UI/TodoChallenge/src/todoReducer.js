import {
    GET_TODOS_SUCCESS, 
    GET_TODOS,
    ADD_TODO, 
    TODO_COMPLETE_CHANGE, 
    TODO_TEXT_CHANGE
} from "./todoActions";

export const reducer = (state, action) => {
    switch (action.type) {
        case TODO_TEXT_CHANGE: {
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, text: action.text} : todo)
            };
        }
        case TODO_COMPLETE_CHANGE: {
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, isComplete: action.isComplete} : todo)
            };
        }
        case GET_TODOS_SUCCESS: {
            return {
                ...state,
                todos: action.todos
            };
        }
        case GET_TODOS: {
            return {
                ...state,
                todos: action.todos
            };
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
        }
        default: return state;
    }
}