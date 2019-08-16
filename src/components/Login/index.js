import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../../reducers/users/actions'
import './styles.scss'
import { Input, Button } from 'antd';
import { Link, Redirect } from 'react-router-dom'
import Toastr from '../Toastr'

const Login = ({userLogin, isLoggedIn, hasError}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const changeUsername = (username) => {
        setUsername(username)
    }

    const changePassword = (password) => {
        setPassword(password)
    }

    if (isLoggedIn) {
        return <Redirect to="/list"/>
    }

    return (
        <div className="login-wrap">
            <div className="login-container">
                <div className="input-container">
                    <Input type="text"
                           className="login-input"
                           placeholder="Write your username"
                           value={username}
                           onChange={(e) => changeUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        className="login-input"
                        placeholder="Write your password"
                        value={password}
                        onChange={(e) => changePassword(e.target.value)}
                    />
                </div>

                <Button
                    type="primary"
                    onClick={() => userLogin({username, password})}
                >
                    Login
                </Button>
                <div className="registration-container">
                    <div className="registration-text">
                        Doesn't register yet? <Link to="/register">Register!</Link>
                    </div>
                </div>
            </div>
            {hasError ? <Toastr type="error" /> : null}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.users.isLoggedIn,
    hasError: state.users.hasError
})

const mapDispatchToProps = (dispatch) => ({
    userLogin: (params) => dispatch(userLogin(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);