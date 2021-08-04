/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import moment from 'moment';
import 'moment/dist/locale/es';
import GlobalStyle from '../../global-styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginPage from '../LoginPage/Loadable';
import RegistrationPage from '../RegistrationPage';
import StaticPage from '../StaticPage';
import MiCuentaPage from '../MiCuentaPage';
import EditProfilePage from '../EditProfilePage';
import MyHistoriesPage from '../MyHistoriesPage';
import NewPasswordPage from '../NewPasswordPage';
import AppRoute from './AppRoute';
moment.locale('es');
export default function App() {
  return (
    <div className="container-fluid no-gutters p-0 h-100">
      <Header />
      <Switch>
        <AppRoute exact path="/" component={HomePage} />
        <AppRoute
          exact
          path="/iniciar"
          component={LoginPage}
          requireLoggedIn={false}
        />
        <AppRoute
          exact
          path="/registrate"
          component={RegistrationPage}
          requireLoggedIn={false}
        />
        <AppRoute exact path="/pagina/:slug" component={StaticPage} />
        <AppRoute
          exact
          path="/mi-cuenta"
          component={MiCuentaPage}
          requireLoggedIn
        />
        <AppRoute
          exact
          path="/mi-perfil"
          component={EditProfilePage}
          requireLoggedIn
        />
        <AppRoute
          exact
          path="/mi-historial"
          component={MyHistoriesPage}
          requireLoggedIn
        />
        <AppRoute
          exact
          path="/res-contrasena/:email/:code"
          component={NewPasswordPage}
        />
        <AppRoute component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
