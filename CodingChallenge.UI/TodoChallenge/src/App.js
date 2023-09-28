import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import TodoList from './components/todo/TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import './button.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: '',
      dueDate: '', // Add dueDate to state
      todos: [],
    };
  }

  componentDidMount() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.setState({ todos: JSON.parse(storedTodos) });
    }

    const chartCanvas = document.getElementById('todoChart').getContext('2d');

    const numComplete = this.state.todos.filter((todo) => todo.completed).length;
    const numIncomplete = this.state.todos.length - numComplete;

    new Chart(chartCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Complete', 'Incomplete'],
        datasets: [
          {
            data: [numComplete, numIncomplete],
            backgroundColor: ['#28a745', '#dc3545'],
          },
        ],
      },
    });
  }

  textInputChange = (e) => {
    this.setState({ ...this.state, newTodo: e.target.value });
  }

  dueDateInputChange = (e) => {
    this.setState({ ...this.state, dueDate: e.target.value }); // Add due date input change handler
  }

  addNewTodo = () => {
    const { newTodo, dueDate } = this.state;

    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
        dueDate, // Include the due date
      };

      this.setState(
        (prevState) => ({
          todos: [...prevState.todos, newTodoItem],
          newTodo: '',
          dueDate: '', // Clear the due date input
        }),
        () => {
          localStorage.setItem('todos', JSON.stringify(this.state.todos));
        }
      );
    }
  }

  render() {
    return (
      <div className="App">
        <canvas id="todoChart" width="200" height="200"></canvas>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.textInputChange}
          placeholder="Add a new todo"
        />
        <input
          type="date"
          value={this.state.dueDate} // Add input for due date
          onChange={this.dueDateInputChange}
        />
        <button className="btn--default" onClick={this.addNewTodo}>
          <FontAwesomeIcon icon={faSave} /> Add
        </button>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
