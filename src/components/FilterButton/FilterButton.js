import React from 'react';
import cx from 'classnames';
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

export default FilterButton;