/**
 *
 * Select
 *
 */

import React from 'react';
import { useField } from 'formik';
import { Form } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const defaultValidate = (value, props) => {
  // required validate
  /* eslint-disable-next-line */
  if (props.required && (value === '' || value === null)) return 'Este campo es requerido';
  return null;
};

function ExSelect({ children, className = '', ...props }) {
  const [field, meta] = useField({
    ...props,
    validate: value => defaultValidate(value, props),
  });
  const isInvalid = meta.touched && meta.error;
  return (
    <Form.Control
      as="select"
      {...field}
      {...props}
      className={`custom-select ${className} ${isInvalid ? 'is-invalid' : ''}`}
    >
      {children}
    </Form.Control>
  );
}
function SelectDate({
  label = 'Fecha de nacimiento',
  names = { date: 'date', month: 'month', year: 'year' },
  ...props
}) {
  const startYear = new Date().getFullYear();

  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="d-flex justify-content-between">
        <ExSelect name={names.date} {...props}>
          <option key={0} value="">
            Día
          </option>
          {Array.from(Array(31), (_, x) => {
            const val = x + 1 < 10 ? `0${x + 1}` : x + 1;
            return (
              <option key={val} value={val}>
                {val}
              </option>
            );
          })}
        </ExSelect>
        <ExSelect name={names.month} className="mx-1" {...props}>
          <option key={0} value="">
            Mes
          </option>
          {Array.from(Array(12), (_, x) => {
            const val = x + 1 < 10 ? `0${x + 1}` : x + 1;
            return (
              <option key={val} value={val}>
                {val}
              </option>
            );
          })}
        </ExSelect>
        <ExSelect name={names.year} {...props}>
          <option key={0} value="">
            Año
          </option>
          {Array.from(Array(100), (_, x) => (
            <option key={startYear - x} value={startYear - x}>
              {startYear - x}
            </option>
          ))}
        </ExSelect>
      </div>
    </div>
  );
}

SelectDate.propTypes = {};

export default SelectDate;
