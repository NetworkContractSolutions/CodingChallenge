import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { getTodos} from "../../store/todoActions";
import styles from './styles.module.scss';
import { PieChart } from '@mui/x-charts/PieChart';

const TodoChart = ({todos, getTodos}) => {

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const completedCount = todos.filter(todo => todo.isComplete).length;
  const notCompletedCount = todos.filter(todo => !todo.isComplete).length;

    const data = [
      { value: completedCount, label: 'Done' },
      { value: notCompletedCount, label: 'Not Done' }
     
    ];
    const size = {
      width: 400,
      height: 200,
    };
  return (
      <div className='chart-container'>
        <PieChart series={[{ data, innerRadius: 80 }]} {...size} />
      </div>
  )
  
}

const mapStateToProps = (state) => ({
  todos: state.todos ?? []
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoChart);