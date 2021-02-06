import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phonebook.getContacts;
export const getFilter = state => state.phonebook.getFilter;
export const isLoading = state => state.phonebook.loader;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
