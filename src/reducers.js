import {
    ADD_TODO ,
    TOGGLE_TODO ,
    SET_VISIBILITY_FILTER ,
    VisibilityFilters
} from './actions'

const initialState = {
    visibilityFilter : VisibilityFilters.SHOW_ALL ,
    todos : []
};

const todoApp = (state = initialState , action) => {
    console.log('Inside reducer') ;
    console.log(state) ;
    switch(action.type) {
        case SET_VISIBILITY_FILTER :
            return {...state , visibilityFilter : action.filter} ;
        case ADD_TODO :
            return {...state , todos : [...state.todos , {
                text : action.text ,
                completed : false , 
                id : action.id 
            }]} ;
        case TOGGLE_TODO :
            return {...state , todos : state.todos.map(todo => {
                if(todo.id === action.id) return {...todo , completed : !todo.completed} ;
                return todo ;
            }) } ;
        default :
            return state ;
    }
};

export default todoApp ;
