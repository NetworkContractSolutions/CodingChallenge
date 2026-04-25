import React, {Component} from 'react';
import TodoList from "./components/todo/TodoList";
import NewTodo from './components/todo/NewTodo';
import TodoChart from './components/todo/TodoChart';
import "./App.scss";
import './button.scss';

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

  addNewTodo = (e) => {
    console.log('add new todo');
    
  }

  render() {
    return (
      <div className="App">
        <h1 className='App-header'>TODO APP</h1>
        <TodoChart />
        <NewTodo />
        <TodoList />
      </div>
  )}
}

export default App;