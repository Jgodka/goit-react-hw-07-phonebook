import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { List, SpanName, SpanNumber, ButtonDelete } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  if (!filteredContacts?.length) {
    return <p>No contacts found.</p>;
  }

  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <SpanName>{contact.name}:</SpanName>
            <SpanNumber>{contact.number}</SpanNumber>
            <ButtonDelete
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </ButtonDelete>
          </li>
        );
      })}
    </List>
  );
};
