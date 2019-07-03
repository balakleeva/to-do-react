import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoList from './components/TodoList'
import appStore from './reducers'

const store = createStore(appStore);
const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <TodoList />,
    </Provider>,
    rootElement
);