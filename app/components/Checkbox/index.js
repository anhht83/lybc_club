/**
 *
 * Checkbox
 *
 */

import React from 'react';
import { useField } from 'formik';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const defaultValidate = (value, props) => {
  // required validate
  if (
    props.required &&
    props.checked !== undefined &&
    props.checked === false
  ) {
    return 'Este campo es requerido';
  }
  return null;
};

function Checkbox({ className = '', label = '', ...props }) {
  const [field, meta] = useField({
    ...props,
    validate: value => defaultValidate(value, props),
  });
  const isInvalid = meta.touched && meta.error;
  return (
    <div className={`form-check ${className}`}>
      <input
        className={`form-check-input ${isInvalid ? 'is-invalid' : ''}`}
        type="checkbox"
        {...field}
        {...props}
      />
      <label className="form-check-label">{label}</label>
      {isInvalid ? <div className="invalid-feedback">{meta.error}</div> : null}
    </div>
  );
}

Checkbox.propTypes = {};

export default Checkbox;
