import React, {useState, useEffect} from 'react';
import Todo from "./Todo";
import {TodoListModel} from "../../TodoModel";
import {connect} from "react-redux";
import {completeTodo, getTodos, updateTodoText} from "../../todoActions";
import { useDispatch } from 'react-redux'

const TodoList = ({todos, getTodos, onTodoCompleteChange}) => {
    const [filtered, setFiltered] = useState(true);

    const dispatch = useDispatch();

    const filterByOnChange = () => {
        setFiltered(!filtered);
    }

    useEffect(() => {
        getTodos();
    }, [getTodos]);

    const renderTodoList = (todos) => {
        todos.sort((a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate));
        return todos.filter(filterTodos).map(mapTodoObjectToComponent);
    }

    const filterTodos = (todo) => filtered ? !todo.isComplete : true;

    const mapTodoObjectToComponent = (todo, i) => {
       return (<Todo key={i}
                     todo={todo}
                     onTextChange={(text) => {dispatch(updateTodoText(todo, text))}}
                     onCompleteChange={onTodoCompleteChange} 
               />);
    }

    return (
        <div className="todo-list">        
            <div className='todo-filter'>
                <span>Filter by complete</span>
                <input type="checkbox" defaultChecked={filtered} onChange={filterByOnChange}  />
            </div>           
            <div className='todo-list-content'>
                {renderTodoList(todos)}
            </div>
        </div>
    );
}

TodoList.propTypes = TodoListModel;

const mapStateToProps = (state) => ({
    todos: state.todos ?? []
});

const mapDispatchToProps = (dispatch) => ({
    onTodoCompleteChange: (todo) => dispatch(completeTodo(todo)),
    getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);