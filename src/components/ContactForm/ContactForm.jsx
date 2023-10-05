import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import {
  AddButton,
  StyledForm,
  StyledLabel,
  ErrorMsg,
} from './ContactForm.styled';

const quizSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'At least 5 digits')
    .max(20, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch(); 
  const contacts = useSelector(getContacts); 

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={quizSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <Field type="text" name="name" />
          <ErrorMsg type="text" name="name" component="div" />
        </StyledLabel>
        <StyledLabel>
          Number
          <Field type="tel" name="number" />
          <ErrorMsg type="tel" name="number" component="div" />
        </StyledLabel>

        <AddButton type="submit">Add contact</AddButton>
      </StyledForm>
    </Formik>
  );
};