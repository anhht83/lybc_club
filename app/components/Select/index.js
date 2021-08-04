/**
 *
 * Select
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Select({ options = [], defaultValue = '', className = '', ...props }) {
  return (
    <select className={`custom-select ${className}`} {...props}>
      {options.map(({ val, text }) => {
        if (val == defaultValue)
          return (
            <option key={val} value={val} selected>
              {text}
            </option>
          );
        return (
          <option key={val} value={val}>
            {text}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {};

export default Select;
