/**
 *
 * Breadcrumb
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoggedInBlock from '../LoggedInBlock';

// import styled from 'styled-components';

function Breadcrumb({ breadcrumbs = [], dispatch }) {
  return (
    <>
      {breadcrumbs.length > 0 && (
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>
          {breadcrumbs.map((breadcrumb, index) => {
            let className = 'breadcrumb-item text-capitalize';
            let child = '';
            if (index === breadcrumbs.length - 1) {
              className += ' active';
              child = breadcrumb.title;
            } else {
              child = <Link to={breadcrumb.path}>{breadcrumb.title}</Link>;
            }
            return (
              <li key={index} className={className}>
                {child}
              </li>
            );
          })}
        </ol>
      )}
      <LoggedInBlock dispatch={dispatch} />
    </>
  );
}

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.array,
  dispatch: PropTypes.func,
};

export default Breadcrumb;
