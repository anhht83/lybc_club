/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src="/logo.png" />
      </Link>
    </header>
  );
}

Header.propTypes = {};

export default Header;
