import React from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'
import { TextField, Button } from '@material-ui/core';

const AddTodo = ({ dispatch }) => {
    let input ;
    return (
        <div style={{marginBottom:20,alignItems:'center'}}>
            <form onSubmit={e => {
                e.preventDefault() ;
                input = document.querySelector('input[name=todo]')
                console.log(input.value) ;
                if(!input.value.trim()) return ;
                dispatch(addTodo(input.value));
                input.value = '';
            }} style={{marginTop : '50px' , textAlign : 'center'}}>
                <TextField name="todo" style={{marginRight:20,width:'40%'}} placeholder='What needs to be done?'/>
                <Button variant="raised" color="secondary" type="submit">Add Todo</Button>
            </form>
        </div>
    );
};

export default connect()(AddTodo) ;
