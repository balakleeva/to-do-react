import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton/FilterButton'
import Header from './components/Header/Header'
import './index.scss';

class Todolist extends React.Component {
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


ReactDOM.render(
    <Todolist/>,
    document.getElementById('root')
);