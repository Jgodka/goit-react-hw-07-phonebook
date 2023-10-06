import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Subtitle } from './App.styled';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};
