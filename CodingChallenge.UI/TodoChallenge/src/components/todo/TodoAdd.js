import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../../todoActions';
import Box from '@mui/material/Box';

const TodoAdd = () => {
    const dispatch = useDispatch();

    const [newTodoText, setNewTodoText] = useState('');
    const [newTodoDate, setNewTodoDate] = useState('');

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pb: 2 }}>
            <Box sx={{ flexDirection: 'row', pb: 1 }}>
                <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)}></input>
                <button className={"btn--default"} onClick={() => {
                    dispatch(addTodo(newTodoText, newTodoDate));
                }}>
                    Add
                </button>
            </Box>
            <input type="date" value={newTodoDate} onChange={(e) => setNewTodoDate(e.target.value)}></input>
        </Box >
    )
}

export default TodoAdd;