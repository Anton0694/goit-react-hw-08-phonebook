import { ContainerApp } from './App.styled';
import { useAuth } from './hooks/useAuth';
import { React, lazy } from 'react';
import { GlobalStyle } from '../GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contact'));

export default function App() {
   const { isRefreshing } = useAuth();
  

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