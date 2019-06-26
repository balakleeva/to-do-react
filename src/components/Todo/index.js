import React from 'react';
import cx from 'classnames';
import './styles.scss';

const Todo = ({changeDone, id, text, removeTodo, isDone}) => {
    return (
        <li
            key={id}
            className={cx('todos-item', {'done': isDone})}
        >
            <span onClick={changeDone}>{text}</span>
            <span onClick={removeTodo} className="remove-todo">x</span>
        </li>
    )
};

export default React.memo(Todo);
