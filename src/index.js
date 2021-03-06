import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()
const rootElement = document.getElementById('root')

ReactDOM.render(
    <Root store={store}/>,
    rootElement
);