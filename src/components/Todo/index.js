import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
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

Todo.propTypes = {
    changeDone: PropTypes.func,
    id: PropTypes.number,
    text: PropTypes.string,
    removeTodo: PropTypes.func,
    isDone: PropTypes.bool,
};

export default React.memo(Todo);
