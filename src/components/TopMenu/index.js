import React, { useState } from 'react'
import './styles.scss'
import { userLogout } from '../../reducers/users/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Avatar } from 'antd'
import UserMenu from '../UserMenu'

const TopMenu = ({userLogout}) => {
    const [popUp, setPopUp] = useState(false)
    const handleLogout = () => {
        userLogout()
        localStorage.removeItem('user_id')
        return (<Redirect to="/login"/>)
    }

    const openPopUp = () => {
        console.log('---')
        setPopUp(!popUp)
    }

    return (
        <div className="top-menu-container">
            {/*<button*/}
            {/*    className="btn-logout"*/}
            {/*    onClick={() => handleLogout()}*/}
            {/*>*/}
            {/*    Logout*/}
            {/*</button>*/}
            <div className="avatar-container" onClick={() => openPopUp()}>
                <Avatar icon="user"/>
                {popUp ? <UserMenu/> : null}
            </div>


        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => dispatch(userLogout())
})

export default connect(null, mapDispatchToProps)(TopMenu);