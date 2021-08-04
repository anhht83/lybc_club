/**
 *
 * A
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function A({
  className = 'font-weight-bolder text-dark',
  children,
  href = '#',
  ...props
}) {
  return (
    <Link to={href} {...props} className={className}>
      {children}
    </Link>
  );
}

A.propTypes = {};

export default A;
