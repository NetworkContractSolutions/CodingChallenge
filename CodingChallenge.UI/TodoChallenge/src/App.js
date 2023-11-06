import React from 'react';
import TodoList from "./components/todo/TodoList";
import TodoAdd from "./components/todo/TodoAdd";
import TodoDonutChart from './components/todo/TodoDonutChart';
import "./App.scss";
import './button.scss';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const App = () => {

  return (
    <Container maxWidth="sm">
      <Box className="App" sx={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ margin: 'auto', textAlign: 'center' }}>
          Todo App
        </h1>
        <TodoDonutChart />
        <TodoAdd />
        <TodoList />
      </Box>
    </Container>
  )
}

export default App;
