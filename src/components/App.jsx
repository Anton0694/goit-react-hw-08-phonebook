import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from './redux/operations';
import { selectContacts } from './redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContainerApp } from './App.styled';
import { fetchContacts } from './redux/operations'
import { useAuth } from './hooks/useAuth';
import { useEffect, lazy } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Layout } from './Layout';

import React from 'react';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contact'));

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
   const { isRefreshing } = useAuth();
  
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

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    !isRefreshing && (<ContainerApp>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  component={RegisterPage}
                  redirectTo={'/contacts'}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute component={LoginPage} redirectTo={'/contacts'} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo={'/login'} />
              }
            />
          </Route>
        </Routes>
      
      <ContactForm onSubmit={onSubmitHandler} />
      <Filter />
      <ContactList onDeleteContact={onDeleteHandler} />
      <GlobalStyle />
    </ContainerApp>
    )
  );
}