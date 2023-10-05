import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Subtitle } from './App.styled';

export const App = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};
