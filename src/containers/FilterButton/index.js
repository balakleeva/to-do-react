import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss'
import { connect } from "react-redux";
import { changeFilter } from "../../reducers/filtersList/actions";

const FilterButton = ({ filter, children, changeFilter }) => {
    return (
        <button
            className={cx('btn', children, {[`select-${filter}`]: filter})}
            onClick={() => changeFilter(filter)}
        >
            {children}
        </button>
    )

};

FilterButton.propTypes = {
    text: PropTypes.string,
    changeFilter: PropTypes.func,
    filter: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
    changeFilter: (params) => dispatch(changeFilter(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);