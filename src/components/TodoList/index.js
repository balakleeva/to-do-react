import React from 'react';
import './styles.scss'
import Header from "../Header/Header";
import Todo from "../Todo";
import FilterButton from "../FilterButton/FilterButton";
import {connect} from "react-redux";
import {addTodo, removeTodo} from "../../reducers/items/actions";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            filter: "all",
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.changeDone = this.changeDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    getTasks() {
        const {filter, items} = this.state;
        return items.filter((item) => ((filter === 'all') || (filter === 'completed') === item.isDone));
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    addTodo() {
        if (this.state.text.length === 0) {
            alert("Write todo!");
            return
        }

        const newTodo = {
            text: this.state.text,
            isDone: false,
            id: this.state.items.length + 1
        };

        this.setState((state) => ({
            ...state,
            items: state.items.concat(newTodo),
            text: ''
        }));

    }

    changeDone(item_id) {
        this.setState((prevState) => {
            const el = prevState.items.find(({id}) => id === item_id);
            el.isDone = !el.isDone;

            return {...prevState};
        })
    }

    removeTodo(item_id) {
        this.setState({
            items: this.state.items.filter((item) => item.id !== item_id)
        })
    }

    render() {
        console.log('.........................', this.props)
        return (
            <div className="container">
                <div className="todo-list">
                    <Header filter={this.state.filter} items={this.state.items}/>
                    <div className="game-info">
                        <ul className="todos">
                            {this.getTasks().map(item => (
                                <Todo changeDone={() => this.changeDone(item.id)}
                                      isDone={item.isDone}
                                      text={item.text}
                                      id={item.id}
                                      key={item.id}
                                      removeTodo={() => this.removeTodo(item.id)}/>
                            ))}
                        </ul>
                    </div>
                    <input
                        className="input-todo"
                        placeholder="Add todo"
                        onChange={this.handleChange}
                        value={this.state.text}/>

                    <button className="add-todo-button" onClick={this.addTodo}>+</button>

                    <div className="button-group">
                        <FilterButton text="All" filter={this.state.filter}
                                      changeFilter={() => this.setState({filter: 'all'})}/>

                        <FilterButton text="Completed" filter={this.state.filter}
                                      changeFilter={() => this.setState({filter: 'completed'})}/>

                        <FilterButton text="Active" filter={this.state.filter}
                                      changeFilter={() => this.setState({filter: 'active'})}/>
                    </div>

                </div>
            </div>

        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    items: state.items,
    filtersList: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
    addTodo: (params) => dispatch(addTodo(params)),
    removeTodo: (params) => dispatch(removeTodo(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
