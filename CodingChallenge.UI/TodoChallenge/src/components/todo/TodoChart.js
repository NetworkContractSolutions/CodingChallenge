import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DonutChart from 'react-donut-chart';
import { getTodos } from "../../todoActions";

const TodoChart = ({todos, getTodos}) => {
    useEffect(() => {
        getTodos();
    }, []);

    return ( 
        <div>
            <DonutChart data={[{
                                label: 'Not Done',
                                value: todos.filter(todo => !todo.isComplete).length
                            },
                            {
                                label: 'Done',
                                value: todos.filter(todo => todo.isComplete).length
                            },]}
            />
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