import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss'

const FilterButton = ({text, changeFilter, filter}) => {
    return (
        <button
            className={cx('btn', text, {[`select-${filter}`]: filter})}
            onClick={changeFilter}
        >
            {text}
        </button>
    )

};

FilterButton.propTypes = {
    text: PropTypes.string,
    changeFilter: PropTypes.func,
    filter: PropTypes.string,
};

export default FilterButton;