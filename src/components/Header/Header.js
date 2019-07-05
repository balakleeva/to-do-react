import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Header = ({filter, items}) => {
    const activeTasks = items.filter((item) => item.isDone === false).length;
    const doneTask = items.filter((item) => item.isDone === true).length;
    let text;
    if (filter === 'SHOW_ALL') {
        text = 'all'
    } else if (filter === 'SHOW_DONE') {
        text = 'done'
    } else {
        text = 'active'
    }

    return (
        <div className="header-container">
            <div className="header">
                <span className="header-title">React ToDo List!</span>
                <div className="task-number">
                    You
                    have {filter === 'SHOW_DONE' ? doneTask : filter === 'SHOW_ACTIVE' ? activeTasks : items.length} {text} tasks!
                </div>
            </div>
        </div>
    )
};

Header.propTypes = {
    filter: PropTypes.string,
    items: PropTypes.array,
};

export default Header;