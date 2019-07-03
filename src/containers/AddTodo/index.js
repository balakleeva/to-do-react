import React from 'react';
import {connect} from "react-redux";
import { addTodo } from "../../reducers/items/actions";

const AddTodo = (props) => {
    return (
        <div>
            <input
                className="input-todo"
                placeholder="Add todo"
            />

            <button className="add-todo-button" onClick={props.addTodo}>+</button>
        </div>
    )
};

const mapStateToProps = (state) => ({
    items: state.items,
    filtersList: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
    addTodo: (params) => dispatch(addTodo("qwerty")),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);