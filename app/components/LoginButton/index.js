/**
 *
 * LoginButton
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function LoginButton() {
  return (
    <Link to="/iniciar" className="btn btn-outline-secondary">
      INICIA SESIÓN / REGÍSTRATE
    </Link>
  );
}

LoginButton.propTypes = {};

export default LoginButton;
