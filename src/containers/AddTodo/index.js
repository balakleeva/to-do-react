import React, {useState, useCallback} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../../reducers/items/actions";

const AddTodo = ({addTodo}) => {
    const [text, setText] = useState('');

    const handleClick = useCallback((text) => {
        addTodo(text);
        setText('')
    }, [addTodo]);

    return (
        <div>
            <input onChange={e => setText(e.target.value)}
                   value={text}
                   className="input-todo"
                   placeholder="Add todo"
            />

            <button className="add-todo-button"
                    onClick={() => handleClick(text)}
            >
                +
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