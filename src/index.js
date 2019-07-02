import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoList from './components/TodoList'
import appStore from './reducers'

const store = createStore(appStore,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <TodoList />,
    </Provider>,
    document.getElementById('root')
);