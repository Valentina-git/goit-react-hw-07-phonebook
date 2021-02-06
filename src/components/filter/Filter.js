import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setFilter } from '../../redux/actions/phonebookActions';
import FilterWrapper from './FilterStyled';

const Filter = ({ setFilter, filter }) => {
  const onHandleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <FilterWrapper>
      <label className="filterLabel">
        Search by name
        <input
          className="filterInput"
          type="text"
          name="filter"
          value={filter}
          onChange={onHandleChange}
        />
      </label>
    </FilterWrapper>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.phonebook.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => {
      dispatch(setFilter(value));
    },
  };
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
