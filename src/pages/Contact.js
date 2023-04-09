import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, fetchContacts } from '../components/redux/operations';
import { selectContacts } from '../components/redux/selectors';

import { GlobalStyle } from '../GlobalStyle';
import  ContactForm  from '../components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import  ContactList  from '../components/ContactList/ContactList';


export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
   const onSubmitHandler = (data) => {
    const isContactExists = contacts.some(
      (contact) => contact.name === data.name
    );

    if (isContactExists) {
      alert(`${data.name} is already in contacts`);
      return;
  }
  
   const contact = {
      id: data.id,
      name: data.name,
      phone: data.phone,
    };
    dispatch(addContact(contact));
  };

   const onDeleteHandler = (id) => {
    dispatch(deleteContact(id));
  };


  return (
    <>
      <h1>Phonebook</h1>
        
     <ContactForm onSubmit={onSubmitHandler} />
      <Filter />
      <ContactList onDeleteContact={onDeleteHandler} />
      <GlobalStyle />
    </>
  );
}