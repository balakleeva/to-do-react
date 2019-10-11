import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss';
import {connect} from "react-redux";
import { deleteTodo, changeStatus } from "../../reducers/items/actions";
import { Icon } from "antd";

const Todo = ({changeDone, id, text, removeTodo, isDone}) => {
    return (
        <li
            key={id}
            className={cx('todos-item', {'done': isDone})}
        >
            <span onClick={() => changeDone(id)}>{text}</span>
            <Icon type="delete" onClick={() => removeTodo(id)} className="remove-todo" />
            Fast stupid changes
            New one stupid hanges for test
        </li>
    )
};

Todo.propTypes = {
    changeDone: PropTypes.func,
    id: PropTypes.string,
    text: PropTypes.string,
    removeTodo: PropTypes.func,
    isDone: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (params) => dispatch(deleteTodo(params)),
    changeDone: (params) => dispatch(changeStatus(params))
});

export default connect(null, mapDispatchToProps)(Todo);
