/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Button({
  text,
  className,
  color = 'outline-secondary',
  loading = false,
  children,
  ...props
}) {
  return (
    <button
      disabled={loading}
      {...props}
      className={`btn btn-${color} ${className}`}
    >
      {loading && (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
      )}{' '}
      {children || text}
    </button>
  );
}

Button.propTypes = {};

export default Button;
