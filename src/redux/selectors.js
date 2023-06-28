export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filter.filter;

// const getVisibleContacts = (contacts, filterValue) => {
//   const filtredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterValue.toLowerCase())
//   );
//   return filtredContacts;
// };