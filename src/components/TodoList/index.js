import React from 'react';
import './styles.scss'
import Header from "../Header/Header";
import Todo from "../Todo";
import FilterButton from "../../containers/FilterButton";
import {connect} from "react-redux";
import AddTodo from "../../containers/AddTodo";
import {filtersList} from '../../reducers/filtersList/types'
import {Layout} from "antd";
import "antd/dist/antd.css";

class TodoList extends React.Component {

    getTasks() {
        const {items, filtersList} = this.props;
        console.log('items.TodoList', items.TodoList);
        return items.TodoList.filter((item) => ((filtersList === 'SHOW_ALL') || (filtersList === 'SHOW_DONE') === item.isDone));
    }

    render() {
        console.log('.........................', this.props)
        return (
            <Layout className="wrap">
                <div className="container">
                    <div className="todo-list">
                        <Header filter={this.props.filtersList} items={this.props.items.TodoList}/>
                        <div className="todo-info">
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
                            <FilterButton type="primary" filter={filtersList.SHOW_ACTIVE}>Active</FilterButton>
                        </div>

                    </div>
                </div>
            </Layout>

        );
    }
}

const mapStateToProps = (state) => ({
    items: state.items,
    filtersList: state.filtersList.filter,
});

export default connect(mapStateToProps)(TodoList);
