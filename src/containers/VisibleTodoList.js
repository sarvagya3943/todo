import { VisibilityFilters } from '../actions'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos , filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(elem => !elem.completed) ;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(elem => elem.completed) ;
        default:
            return todos ;
    }
};

const mapStateToProps = (state) => {
    return {
        todos : getVisibleTodos(state.todos , state.visibilityFilter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo : id => dispatch(toggleTodo(id))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoList) ;
