import React from 'react'
import Todo from '../components/Todo'
import { FormGroup } from '@material-ui/core';

const TodoList = ({ todos , toggleTodo }) => (
    <FormGroup style={{minHeight : '50vh' , maxHeight : '50vh' , overflowY : 'scroll' , flexDirection:'row'}}>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </FormGroup>
);

export default TodoList ;
