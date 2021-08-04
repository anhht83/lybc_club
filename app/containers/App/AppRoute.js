/**
 *
 * AppRoute
 *
 *
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Auth } from './helpers';

const AppRoute = ({
  requireLoggedIn,
  component: Component,
  ...props
}) => (
  <Route
    {...props}
    render={propsChild =>
      (requireLoggedIn && Auth.isLoggedIn()) ||
      (requireLoggedIn === false && !Auth.isLoggedIn()) ||
      requireLoggedIn === undefined ? (
          <Component {...propsChild} />
        ) : (
          <Redirect to="/" />
        )
    }
  />
);

AppRoute.propTypes = {
  requireLoggedIn: PropTypes.bool,
  component: PropTypes.any,
};

export default AppRoute;
