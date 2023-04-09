import { ContainerApp } from './App.styled';
import { useAuth } from './hooks/useAuth';
import { React, lazy, useEffect } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Layout } from './Layout';
import { refreshUser } from './redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contact'));

export default function App() {
    const dispatch = useDispatch();
   const { isRefreshing } = useAuth();
  
  
  useEffect(() => {
    dispatch(refreshUser());
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
      
      
      <GlobalStyle />
    </ContainerApp>
    )
  );
}