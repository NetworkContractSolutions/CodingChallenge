import React, {useState, useEffect} from 'react';
import Todo from "./Todo";
import {TodoListModel} from "../../TodoModel";
import {connect} from "react-redux";
import {completeTodo, getTodos, updateTodoText} from "../../todoActions";

const TodoList = ({todos, getTodos, onTodoTextChange, onTodoCompleteChange}) => {
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
    const mapTodoObjectToComponent = (todo, i) => (<Todo key={i}
                                                         todo={todo}
                                                         onTextChange={onTodoTextChange}
                                                         onCompleteChange={onTodoCompleteChange} />);

    return (
        <div className="todo-list">
            <h2>List of todos</h2>
            <div>
                <span>Filter by complete</span>
                <input type="checkbox" defaultChecked={filtered} onChange={filterByOnChange}  />
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
    onTodoTextChange: (text, id) => dispatch(updateTodoText(text, id)),
    onTodoCompleteChange: (todo) => dispatch(completeTodo(todo)),
    getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);