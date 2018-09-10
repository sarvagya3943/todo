import ReactDOM from 'react-dom' ;
import React from 'react' ;
import todoApp from './reducers' ;
import { createStore } from 'redux' ;
import { Provider } from 'react-redux' ;
import App from './components/App' ;

const store = createStore(todoApp) ;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,
    document.getElementById('root')
);