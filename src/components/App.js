import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'


const styles = {
    card : {
        marginLeft : 'auto' , 
        marginRight : 'auto' ,
        marginBottom : '100px' , 
        width : '50%' , 
        minHeight : '50vh'
    }
}
const App = props => {
    const { classes } = props;
    return (
        <Card raised={true} className={classes.card}>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </Card>
    )
}
export default withStyles(styles)(App);
