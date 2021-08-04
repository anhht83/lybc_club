/**
 *
 * ExField
 *
 */

import React from 'react';
import { validate as validateRut } from 'rut.js';
// import styled from 'styled-components';
import { useField } from 'formik';
import { Form } from 'react-bootstrap';
const defaultValidate = (value, props) => {
  // required validate
  /* eslint-disable-next-line */
  if (props.required && (value === '' || value === null)) return 'Este campo es requerido';

  // rut validate
  if ((props.rut || props.name.toLowerCase() === 'rut') && !validateRut(value))
    return 'RUT Incompleto';
  if (props.equalto && value && value !== props.equalto)
    return 'La contraseña no coincide';
  // email validate
  if (
    props.type === 'email' &&
    value &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  )
    return 'Dirección de correo electrónico no válida';
  // ... add more default validate here
  if (value && props.maxlen && value.length > parseInt(props.maxlen, 10))
    return 'Demasiado largo';
  if (value && props.minlen && value.length < parseInt(props.minlen, 10))
    return 'Demasiado corto';

  /* eslint-disable */
  if (
    value != '' &&
    props.max !== undefined &&
    parseFloat(value) > parseFloat(props.max)
  )
    return `No debe ser mayor que ${props.max}`;
  if (
    value != '' &&
    props.min !== undefined &&
    parseFloat(value) < parseFloat(props.min)
  )
    return `No debe ser inferior a ${props.min}`;
  return null;
};

function ExField({ label, text, classNameGroup='', classNameInput='', children, ...props }) {
  const [field, meta, helpers] = useField({ ...props, validate: value => defaultValidate(value,props) });
  const isInvalid = meta.touched && meta.error;
  let type = '';
  switch (props.type) {
    case 'select':
    case 'textarea':
      type = props.type;
      break;
    default: type='input';

  }
  return (
    <div className={`form-group ${classNameGroup}`}>
      <label>{label}</label>
      <Form.Control as={type}
        {...field}
        {...props}
        className={`${classNameInput} ${
          isInvalid ? 'is-invalid' : ''
        }`}
      >
        {children}
      </Form.Control>
      {text && !isInvalid && <span className="form-text">{text}</span>}
      {isInvalid ? <div className="invalid-feedback">{meta.error}</div> : null}
    </div>
  );
}

ExField.propTypes = {};

export default ExField;
