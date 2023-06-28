import { Input, AddButton, Form, Title } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, number } = e.target;
		dispatch(addContact(name.value, number.value))
		e.target.reset();
  };


  return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        />
        <AddButton type="submit">Add contacts</AddButton>
      </Form>
    </>
  );
};

export default ContactForm;
