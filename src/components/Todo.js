import React from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core';

const Todo = ({ onClick , completed , text }) => (
    <FormControlLabel 
        control={<Checkbox onChange={onClick} checked={completed} />}
        label = {text} 
        style={{marginLeft : 100 , width : '100%'}}
    />

) ;

export default Todo ;
