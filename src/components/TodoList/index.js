import React from 'react';
import './styles.scss'
import Header from "../Header/Header";
import Todo from "../Todo";
import FilterButton from "../FilterButton/FilterButton";
import {connect} from "react-redux";
import { removeTodo } from "../../reducers/items/actions";
import AddTodo from "../../containers/AddTodo";

class TodoList extends React.Component {

    getCurrentStateFromStore() {
        return {
            items: this.props.items,
            filter: this.props.filter
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            filter: "all",
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeDone = this.changeDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    getTasks() {
        const {filter} = this.state;
        return this.props.items.TodoList.filter((item) => ((filter === 'all') || (filter === 'completed') === item.isDone));
    }

    handleChange(e) {
        this.setState({text: e.target.value});
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
        console.log('.........................', this.getCurrentStateFromStore())
        return (
            <div className="container">
                <div className="todo-list">
                    <Header filter={this.props.filter} items={this.props.items.TodoList}/>
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

                    <AddTodo/>

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


const mapStateToProps = (state) => ({
    items: state.items,
    filtersList: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
    removeTodo: (params) => dispatch(removeTodo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
