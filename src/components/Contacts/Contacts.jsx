import { ContactsList, ListItem, DeleteBtn, Title, Message } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { getVisibleContacts } from 'services/getVisibleContacts';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <>
      <Title>Contacts</Title>
    
      {contacts.length > 0 ? (
        <ContactsList>
          {visibleContacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              <p>
                {name}: {number}
              </p>
              <DeleteBtn
                onClick={() => dispatch(deleteContact(id))}
                type="button"
              >
                Delete
              </DeleteBtn>
            </ListItem>
          ))}
        </ContactsList>
      ) : <Message>Add your first contact</Message>}
    </>
  );
};

export default Contacts;
