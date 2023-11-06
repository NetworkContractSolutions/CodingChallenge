import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { connect } from "react-redux";
import { TodoListModel } from "../../TodoModel";

const TodoDonutChart = (props) => {
    const chartData = [
        { title: 'Done', value: props.todos.filter(todo => todo.isComplete).length, color: '#2769B6' },
        { title: 'Not Done', value: props.todos.filter(todo => !todo.isComplete).length, color: '#37D184' },
    ]

    return (
        <PieChart
            style={{ height: '200px' }}
            data={chartData}
            label={({ dataEntry }) => dataEntry.title}
        />
    );
}

TodoDonutChart.propTypes = TodoListModel;

const mapStateToProps = (state) => ({
    todos: state.todos ?? []
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDonutChart);