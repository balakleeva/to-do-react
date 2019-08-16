import React from 'react'
import './styles.scss'
import { userLogout } from '../../reducers/users/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const TopMenu = ({userLogout}) => {
    const handleLogout = () => {
        userLogout()
        return (<Redirect to="/login"/>)
    }
    return (
        <div className="top-menu-container">
            <button
                className="btn-logout"
                onClick={() => handleLogout()}
            >
                Logout
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => dispatch(userLogout())
})

export default connect(null, mapDispatchToProps)(TopMenu);