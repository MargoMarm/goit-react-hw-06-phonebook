export const getVisibleContacts = (contacts, filterValue) => {
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return filtredContacts;
};
