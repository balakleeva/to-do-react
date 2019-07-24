import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux'
import TodoList from './components/TodoList'
import configureStore from './configureStore'

const store = configureStore()
const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <TodoList />,
    </Provider>,
    rootElement
);