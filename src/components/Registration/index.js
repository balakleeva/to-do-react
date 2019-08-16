import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import './styles.scss'
import { userRegister } from '../../reducers/users/actions'
import { Link } from 'react-router-dom'

const Registration = ({userRegister, history}) => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userData = () => {
        return {
            name,
            username,
            email,
            password
        }
    }

    const nameChange = (name) => {
        setName(name)
    }

    const usernameChange = (username) => {
        setUsername(username)
    }

    const emailChange = (email) => {
        setEmail(email)
    }

    const passwordChange = (password) => {
        setPassword(password)
    }

    const handleClick = () => {
        userRegister(userData())
        history.push('/login')
    }

    return (
        <div className="registration-wrap">
            <div className="registration-container">
                <div className="registration-input-container">
                    <Input
                        value={name}
                        onChange={(e) => nameChange(e.target.value)}
                        type="text"
                        className="registration-input"
                        placeholder="Write your name"/>

                    <Input
                        value={username}
                        onChange={(e) => usernameChange(e.target.value)}
                        type="text"
                        className="registration-input"
                        placeholder="Write your username"/>

                    <Input
                        value={email}
                        onChange={(e) => emailChange(e.target.value)}
                        type="text"
                        className="registration-input"
                        placeholder="Write your email"/>

                    <Input
                        value={password}
                        onChange={(e) => passwordChange(e.target.value)}
                        type="text"
                        className="registration-input"
                        placeholder="Write your password"/>
                </div>
                <Button type="primary" onClick={() => handleClick()}>Register</Button>
                <div className="login-container">
                    <div className="login-text">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    userRegister: (params) => dispatch(userRegister(params))
})

export default connect(null, mapDispatchToProps)(Registration);