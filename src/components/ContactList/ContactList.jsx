import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectFilterContacts,
} from 'redux/selectors';
import { List, SpanName, SpanNumber, ButtonDelete } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (!filterContacts?.length) {
    return <p>No contacts found.</p>;
  }

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <List>
        {filterContacts.map(contact => {
          return (
            <li key={contact.id}>
              <SpanName>{contact.name}:</SpanName>
              <SpanNumber>{contact.phone}</SpanNumber>
              <ButtonDelete
                type="button"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </ButtonDelete>
            </li>
          );
        })}
      </List>
    </>
  );
};
