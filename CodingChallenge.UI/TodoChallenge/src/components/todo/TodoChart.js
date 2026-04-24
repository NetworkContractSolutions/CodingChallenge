import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './TodoChart.scss';
import {connect} from "react-redux";
import { getTodos } from '../../todoActions';

ChartJS.register(ArcElement, Tooltip, Legend);

const TodoChart = ({todos, getTodos}) => {

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const completedCount = todos.filter(todo => todo.isComplete).length;
  const notCompletedCount = todos.filter(todo => !todo.isComplete).length;

  const getData = () => { 
      return {
        labels: ['Done', 'Not Done'],
        datasets: [
          {
            data: [completedCount, notCompletedCount],
            backgroundColor: [
              'rgba(75, 192, 192, 0.5)',
              'rgba(54, 162, 235, 0.5)',

            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
    };

  return (
      <div className='chart-container'>
          <Doughnut style={{ position: "relative", margin: "auto", width: "40vw" }} data={getData()}/> 
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