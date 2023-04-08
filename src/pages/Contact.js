import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { GlobalStyle } from '../GlobalStyle';
import  ContactForm  from '../components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import  ContactList  from '../components/ContactList/ContactList';
import { fetchContacts } from '../components/redux/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
        
      
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </>
  );
}