import React from 'react';
import cx from 'classnames';
import './styles.css';

const Todo = ({changeDone, id, text, removeTodo, isDone}) => {
    let nameClass = 'todos-item';
    if (!isDone) {
        nameClass += 'done'
    }
    console.log('---', isDone)
    return (
        <li
            onClick={changeDone}
            key={id}
            className={nameClass}
        >
            {text}
            <span onClick={removeTodo} className="remove-todo">x</span>
        </li>
    )
};

export default React.memo(Todo);
