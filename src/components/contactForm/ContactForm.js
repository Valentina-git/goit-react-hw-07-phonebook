import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import ContactFormWrapper from './ContactFormStyled';
import Alert from '../alert/Alert';
import { getContacts } from '../../redux/selectors/phonebookSelectors';
import { operationAddContact } from '../../redux/operations/phonebookOperations';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });

  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const user = { name: state.name, number: state.number };
    if (contacts.some(elem => elem.name === user.name)) {
      showAlertMsg(`${user.name} is already in contacts`);
      return;
    }
    if (!user.name.length) {
      showAlertMsg('Please enter a name');
      return;
    }
    if (!user.number.length) {
      showAlertMsg('Pleas enter a number');
      return;
    }
    dispatch(operationAddContact(user));
    setState({ ...initialState });
  };

  const showAlertMsg = msg => {
    setAlertMsg(msg);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    setTimeout(() => {
      setAlertMsg('');
    }, 3250);
  };

  const { name, number } = state;
  return (
    <ContactFormWrapper>
      <CSSTransition
        classNames="myAlert"
        in={showAlert}
        timeout={250}
        unmountOnExit
      >
        <Alert msg={alertMsg} />
      </CSSTransition>

      <form onSubmit={onHandleSubmit}>
        <label className="formLabel">
          Name
          <input
            className="formInput"
            type="text"
            name="name"
            value={name}
            onChange={onHandleChange}
          />
        </label>
        <label className="formLabel">
          Number
          <input
            className="formInput"
            type="text"
            name="number"
            value={number}
            onChange={onHandleChange}
          />
        </label>
        <button className="formBtn" type="submit">
          Add contact
        </button>
      </form>
    </ContactFormWrapper>
  );
};

export default ContactForm;
