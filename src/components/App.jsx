import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { WrapperContent } from './App.styled';

export const App = () => {
  return (
    <WrapperContent>
      <ContactForm />
      <Filter />
      <Contacts />
    </WrapperContent>
  );
};
