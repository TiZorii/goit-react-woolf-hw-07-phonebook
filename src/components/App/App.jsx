import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';
import ContactForm from 'components/ContactForm';
import Container from 'components/Container';
import Section from 'components/Section';
import Contacts from 'components/Contacts';
import { MainHeading } from './App.styled';


const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div>
      <Container>
        <MainHeading>Phonebook</MainHeading>
        <Section>
          <ContactForm />
        </Section>
      </Container>

      <Container>
        <Contacts />
      </Container>
      <ToastContainer />
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
