import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import './index.css';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            isDone: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.changeDone = this.changeDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
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

        this.setState(state => ({
            ...state,
            items: state.items.concat(newTodo),
        }));

        this.state.text = '';
    }

    changeDone(item_id) {
        this.setState((prevState) => {
            const el = prevState.items.find(({id}) => id === item_id);
            el.isDone = !el.isDone;

            return {...prevState};
        })
    }

    removeTodo(item_id) {
        const remover = this.state.items.filter(item => item.id !== item_id);
        this.setState({items: remover});
    }

    render() {
        return (
            <div className="container">
                <div className="todo-list">
                    <div className="game-info">
                        <ul className="todos">
                            {this.state.items.map(item => (
                                <Todo changeDone={() => this.changeDone(item.id)}
                                      isDone={item.isDone}
                                      text={item.text}
                                      id={item.id}
                                      removeTodo={() => this.removeTodo(item.id)}/>
                            ))}
                        </ul>
                    </div>
                    <input
                        className="input-todo"
                        placeholder="Add todo"
                        onChange={this.handleChange}
                        value={this.state.text}/>

                    <button className="add-todo-button" onClick={this.addTodo}>Add todo</button>
                </div>
            </div>

        );
    }
}


ReactDOM.render(
    <Todolist/>,
    document.getElementById('root')
);