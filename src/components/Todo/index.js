import React from 'react';
import cx from 'classnames';
import './styles.css';

const Todo = ({changeDone, id, text, removeTodo, isDone}) => {
    return (
        <li
            onClick={changeDone}
            key={id}
            className={cx('todos-item', {['done']: isDone})}
        >
            {text}
            <span onClick={removeTodo} className="remove-todo">x</span>
        </li>
    )
};

export default React.memo(Todo);
