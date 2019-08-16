import React from 'react'
import { connect, Provider } from 'react-redux'
import TodoList from '../TodoList'
import Login from '../Login'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Registration from '../Registration'

const Root = ({store, user}) => {
    if (!user.isLoggedIn) {
        return (
            <Provider store={store}>
                <Router>
                    <Redirect to="/login"/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Registration} />
                </Router>
            </Provider>
        )
    } else {
        return (
            <Provider store={store}>
                <Router>
                    <Route path="/list" component={TodoList}/>
                </Router>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users
})

export default connect(mapStateToProps, null)(Root);