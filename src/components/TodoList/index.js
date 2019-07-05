import React from 'react';
import './styles.scss'
import Header from "../Header/Header";
import Todo from "../Todo";
import FilterButton from "../../containers/FilterButton";
import {connect} from "react-redux";
import AddTodo from "../../containers/AddTodo";
import {filtersList} from '../../reducers/filtersList/types'

class TodoList extends React.Component {

    getTasks() {
        const {items, filtersList} = this.props;
        console.log('items.TodoList', items.TodoList)
        return items.TodoList.filter((item) => ((filtersList === 'SHOW_ALL') || (filtersList === 'SHOW_DONE') === item.isDone));
    }

    changeDone(item_id) {
        this.setState((prevState) => {
            const el = this.props.items.TodoList.find(({id}) => id === item_id);
            el.isDone = !el.isDone;

            return {...prevState};
        })
    }

    render() {
        console.log('.........................', this.props)
        return (
            <div className="container">
                <div className="todo-list">
                    <Header filter={this.props.filtersList} items={this.props.items.TodoList}/>
                    <div className="game-info">
                        <ul className="todos">
                            {this.getTasks().map(item => (
                                <Todo
                                    isDone={item.isDone}
                                    text={item.text}
                                    id={item.id}
                                    key={item.id}
                                />
                            ))}
                        </ul>
                    </div>

                    <AddTodo/>

                    <div className="button-group">
                        <FilterButton filter={filtersList.SHOW_ALL}>All</FilterButton>

                        <FilterButton filter={filtersList.SHOW_DONE}>Done</FilterButton>

                        <FilterButton filter={filtersList.SHOW_ACTIVE}>Active</FilterButton>
                    </div>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    items: state.items,
    filtersList: state.filtersList.filter,
});

export default connect(mapStateToProps)(TodoList);
