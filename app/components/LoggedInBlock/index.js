/**
 *
 * LoggedInBlock
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { Auth } from '../../containers/App/helpers';
// import styled from 'styled-components';

function LoggedInBlock({ dispatch }) {
  if (Auth.isLoggedIn()) {
    return (
      <div className="logged-info">
        <span
          className="account-info text-capitalize"
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(push('/mi-cuenta'))}
        >
          {Auth.get('user_name')} |{' '}
        </span>
        <span
          className="logout"
          onClick={() => {
            Auth.logout();
            dispatch(push('/'));
          }}
        >
          CERRAR SESIÓN
        </span>
      </div>
    );
  }
  return null;
}

LoggedInBlock.propTypes = {
  dispatch: PropTypes.func,
};

export default LoggedInBlock;
