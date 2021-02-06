import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ContactLi from './ContactListItemStyled';
import { operationDeleteContact } from '../../../redux/operations/phonebookOperations';
import { setFilter } from '../../../redux/actions/phonebookActions';
import {
  getFilter,
  getFilteredContacts,
} from '../../../redux/selectors/phonebookSelectors';

const ContactListItem = ({ item }) => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onHandleDelete = e => {
    const id = e.target.dataset.id;
    dispatch(operationDeleteContact(id));

    if (
      contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      ).length < 2
    ) {
      dispatch(setFilter(''));
    }
  };

  return (
    <ContactLi>
      <span className="contactListName" key={item.id}>
        {item.name}:
      </span>
      <span className="contactListNumber">{item.number}</span>
      <button
        className="contactListBtn"
        type="button"
        onClick={onHandleDelete}
        data-id={item.id}
      >
        Delete contact
      </button>
    </ContactLi>
  );
};

ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ContactListItem;
