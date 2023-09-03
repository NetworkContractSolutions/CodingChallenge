import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TodoProgress = ({ todos }) => {

    const [percentageComplete, setPercentageComplete] = useState(0);
    const [completeCount, setCompleteCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const calculateProgress = () => {
        setTotalCount(todos.length);
        setCompleteCount(todos.filter(todo => todo.isComplete).length);
        setPercentageComplete(Math.round(100 * (completeCount / totalCount)));
    }

    useEffect(() => {
        calculateProgress(todos);
    });

    // TODO: Externalize size styling for the component.
    return (
        <div className={'todo-progress-wrapper'}>
            <CircularProgressbar value={percentageComplete} text={`${completeCount}/${totalCount}`} />
        </div>
    );
}

export default TodoProgress;