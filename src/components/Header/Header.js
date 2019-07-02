import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Header = ({filter, items}) => {
    const activeTasks = items.filter((item) => item.isDone === false).length;
    const completedTask = items.filter((item) => item.isDone === true).length;

    return (
        <div className="header-container">
            <div className="header">
                <span className="header-title">React ToDo List!</span>
                <div className="task-number">
                    You
                    have {filter === 'completed' ? completedTask : filter === 'active' ? activeTasks : items.length} {filter === 'all' ? '' : filter} tasks!
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