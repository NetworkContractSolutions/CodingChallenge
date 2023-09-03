import React from 'react';
import { TodoListModel } from "../../TodoModel";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, filtered, onTodoTextChange, onTodoCompleteChange }) => {

    const renderTodoList = (todos) => {
        return todos.filter(filterTodos).map(mapTodoObjectToComponent);
    }
    const filterTodos = (todo) => filtered ? !todo.isComplete : true;
    const mapTodoObjectToComponent = (todo, i) => (<TodoItem key={i}
        todo={todo}
        onTextChange={onTodoTextChange}
        onCompleteChange={onTodoCompleteChange} />);

    const byDueDate = (a, b) => {
        if (a.dueDate === b.dueDate) return 0;
        return a.dueDate < b.dueDate ? -1 : 1;
    }

    return (
        <div className="todo-list">
            {renderTodoList(todos.sort(byDueDate))}
        </div>
    );
}

TodoList.propTypes = TodoListModel;

export default TodoList;