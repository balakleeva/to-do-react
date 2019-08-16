import React, { useState, useCallback } from 'react';
import './styles.scss';
import { connect } from "react-redux";
import { addTodo } from "../../reducers/items/actions";
import { Input } from 'antd';

const AddTodo = ({addTodo}) => {
    const [text, setText] = useState('');


    const handleClick = useCallback((text) => {
        addTodo({text: text});
        setText('')
    }, [addTodo]);

    return (
        <div className="input-container">
            <Input onChange={e => setText(e.target.value)}
                   value={text}
                   className="input-todo"
                   placeholder="Add todo"
                   style={{width: '70%'}}
            />

            <button
                className="add-todo-button"
                onClick={() => handleClick(text)}
            >
                <span className="button-text">+</span>
            </button>
        </div>
    )
};

const mapStateToProps = (state) => ({
    items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (params) => dispatch(addTodo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);