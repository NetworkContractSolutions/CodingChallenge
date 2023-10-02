import React, {Component} from 'react';
import TodoList from "./components/todo/TodoList";
import Chart from "./components/todo/TodoChart";
import "./App.scss";
import './button.scss';
import svc from './TodoService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: ''
    };
  }

  textInputChange = (e) =>  {
    this.setState({...this.state, newTodo: e.target.value});
  }

  addNewTodo = () => {
    svc.addTodo(this.state.newTodo);
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Chart />
        <input type="text" value={this.state.newTodo} onChange={this.textInputChange}></input>
        <button className={"btn--default"} onClick={this.addNewTodo}>Add</button>
        <TodoList />
      </div>
  )}
}

export default App;