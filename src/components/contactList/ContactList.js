import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactListWrapper from './ContactListStyled';
import { operationGetContacts } from '../../redux/operations/phonebookOperations';
import ContactListItem from './contactListItem/ContactListItem';
import {
  getFilter,
  getFilteredContacts,
} from '../../redux/selectors/phonebookSelectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationGetContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <ContactListWrapper>
      <TransitionGroup component="ul" classNames="list">
        {contacts
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(item => (
            <CSSTransition classNames="myList" key={item.id} timeout={250}>
              <ContactListItem item={item} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ContactListWrapper>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
