import React from 'react'
import './styles.scss'

const Toastr = ({type}) => {
    if (type === 'error') {
        return (
            <div className="toastr-container error">
                <div className="toastr-message">
                    <span className="message-title">Error</span>
                    <span className="message-text">You wrote wrong username or password</span>
                </div>
            </div>
        )
    } else if (type === 'success') {
        return (
            <div className="toastr-container success">
                <div className="toastr-message">
                    <span className="message-title">Error</span>
                    <span className="message-text">You wrote wrong username or password</span>
                </div>
            </div>
        )
    }
}

export default Toastr;