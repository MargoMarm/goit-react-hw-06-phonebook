import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import initContacts from '../services/contacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.contacts.find(
            existingContact => existingContact.name === action.payload.name
          )
        ) {
          Notiflix.Notify.failure(
            `${action.payload.name} is already in your contacts`
          );
        } else {
          state.contacts.unshift(action.payload);

          Notiflix.Notify.success(
            `${action.payload.name} has been successfully added to  your phonebook`
          );
        }
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
