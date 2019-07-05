import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss';
import {connect} from "react-redux";
import { changeDone, removeTodo} from "../../reducers/items/actions";
import { Icon } from "antd";

const Todo = ({changeDone, id, text, removeTodo, isDone}) => {
    return (
        <li
            key={id}
            className={cx('todos-item', {'done': isDone})}
        >
            <span onClick={() => changeDone(id)}>{text}</span>
            <Icon type="delete" onClick={() => removeTodo(id)} className="remove-todo" />
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

const mapStateToProps = (state, ownProps) => ({
    items: state.items
});

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (params) => dispatch(removeTodo(params)),
    changeDone: (params) => dispatch(changeDone(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Todo));
