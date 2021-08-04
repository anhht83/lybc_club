/**
 *
 * Input
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Input({
  type = 'text',
  name = '',
  label = '',
  classNameGroup = '',
  classNameInput = '',
  ...rest
}) {
  return (
    <div className={`form-group ${classNameGroup}`}>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        type={type}
        className={`form-control ${classNameInput}`}
      />
    </div>
  );
}

Input.propTypes = {};

export default Input;
