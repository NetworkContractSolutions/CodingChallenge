import React, { useState, useEffect } from 'react';
import Todo from "./Todo";
import { TodoListModel } from "../../TodoModel";
import { connect } from "react-redux";
import { completeTodo, getTodos, TODO_TEXT_CHANGE, TODO_DUE_DATE_CHANGE } from "../../todoActions"; // Import the new action type

const TodoList = ({ todos, getTodos, onTodoTextChange, onTodoCompleteChange, onTodoDueDateChange }) => {
    const [filtered, setFiltered] = useState(true);

    const filterByOnChange = () => {
        setFiltered(!filtered);
    }

    useEffect(() => {
        getTodos();
    }, [getTodos]);

    const renderTodoList = (todos) => {
        return todos.filter(filterTodos).map(mapTodoObjectToComponent);
    }
    const filterTodos = (todo) => filtered ? !todo.isComplete : true;
    const mapTodoObjectToComponent = (todo, i) => (
        <Todo key={i}
            todo={todo}
            onTextChange={onTodoTextChange}
            onCompleteChange={onTodoCompleteChange}
            onDueDateChange={onTodoDueDateChange}
        />
    );

    return (
        <div className="todo-list">
            <h2>List of todos</h2>
            <div>
                <span>Filter by complete</span>
                <input type="checkbox" defaultChecked={filtered} onChange={filterByOnChange} />
            </div>
            {renderTodoList(todos)}
        </div>
    );
}

TodoList.propTypes = TodoListModel;

const mapStateToProps = (state) => ({
    todos: state.todos ?? []
});
const mapDispatchToProps = (dispatch) => ({
    onTodoTextChange: (text, id) => dispatch({ type: TODO_TEXT_CHANGE, text, id }),
    onTodoCompleteChange: (todo) => dispatch(completeTodo(todo)),
    onTodoDueDateChange: (dueDate, id) => dispatch({ type: TODO_DUE_DATE_CHANGE, dueDate, id }),
    getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
