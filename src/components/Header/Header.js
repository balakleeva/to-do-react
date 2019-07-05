import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Header = ({filter, items}) => {
    const activeTasks = items.filter((item) => item.isDone === false).length;
    const doneTask = items.filter((item) => item.isDone === true).length;

    let text;
    switch (filter) {
        case 'SHOW_ALL': text = 'all';
        case 'SHOW_DONE': text = 'done';
        case 'SHOW_ACTIVE': text = 'active'
    }
    console.log('text', text)

    return (
        <div className="header-container">
            <div className="header">
                <span className="header-title">React ToDo List!</span>
                <div className="task-number">
                    You
                    have {text} {filter === 'SHOW_DONE' ? doneTask : filter === 'SHOW_ACTIVE' ? activeTasks : items.length} tasks!
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