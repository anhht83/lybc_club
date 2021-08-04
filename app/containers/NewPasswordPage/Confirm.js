/**
 *
 * RegistrationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import Button from '../../components/Button';
import A from '../../components/A';

export function SetPasswordConfirm({ dispatch }) {
  return (
    <div id="page-content">
      <div className="container text-center">
        <div className="title mt-0">RESTABLECER CONTRASEÑA</div>
        <div className="text-uppercase">
          Tu contraseña ha sido restablecida.
        </div>
      </div>
      <div className="d-flex justify-content-center no-gutters">
        <div className="frm-normal text-center py-0">
          <Button
            className="btn-block mt-4 mb-3"
            onClick={() => dispatch(push('/iniciar'))}
            text="INICIAR SESIÓN"
          />
          <A href="/">
            <span className="text-underline">Lo haré más adelante</span>
          </A>
        </div>
      </div>
    </div>
  );
}

SetPasswordConfirm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default SetPasswordConfirm;
