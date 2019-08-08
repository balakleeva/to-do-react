import React from 'react';
import './styles.scss'
import Header from "../Header/Header";
import Todo from "../Todo";
import FilterButton from "../../containers/FilterButton";
import { connect } from "react-redux";
import AddTodo from "../../containers/AddTodo";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { fetchTodos } from "../../reducers/items/actions";
import * as Types from '../../reducers/filtersList/types'

class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos()
    }



    getTasks() {
        const {items, filtersList} = this.props;
        return items.todoList.filter((item) => ((filtersList === 'SHOW_ALL') || (filtersList === 'SHOW_DONE') === item.isDone));
    }

    render() {
        return (
            <Layout className="wrap">
                <div className="container">
                    <div className="todo-list">
                        <Header filter={this.props.filtersList} items={this.props.items.todoList}/>
                        <div className="todo-info">
                            <ul className="todos">
                                {this.getTasks().map(item => (
                                    <Todo
                                        isDone={item.isDone}
                                        text={item.text}
                                        id={item._id}
                                        key={item._id}
                                    />
                                ))}
                            </ul>
                        </div>

                        <AddTodo/>

                        <div className="button-group">
                            <FilterButton filter={Types.filtersList.SHOW_ALL}>All</FilterButton>
                            <FilterButton filter={Types.filtersList.SHOW_DONE}>Done</FilterButton>
                            <FilterButton filter={Types.filtersList.SHOW_ACTIVE}>Active</FilterButton>
                        </div>

                    </div>
                </div>
            </Layout>

        );
    }
}

const mapStateToProps = (state) => ({
    items: state.items,
    filtersList: state.filtersList,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: (params) => dispatch(fetchTodos(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
