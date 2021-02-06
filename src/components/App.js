import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { getContacts, isLoading } from '../redux/selectors/phonebookSelectors';
import AppWrapper from './AppStyled';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

const App = () => {
  const contacts = useSelector(getContacts);
  const loading = useSelector(isLoading);

  return (
    <AppWrapper>
      {loading && (
        <div>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
      <CSSTransition className="myTitle" in={true} appear={true} timeout={500}>
        <h1 className="pageTitle">Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <h2 className="contactsTitle">Contacts</h2>

      <CSSTransition
        classNames="myFilter"
        in={contacts.length > 1}
        timeout={250}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <ContactList />
    </AppWrapper>
  );
};

export default App;
