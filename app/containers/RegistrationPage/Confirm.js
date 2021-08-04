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

export function RegistrationConfirm({ dispatch }) {
  return (
    <div id="page-content">
      <div className="container text-center">
        <div className="title mt-0">MUCHAS GRACIAS</div>
        <div className="text-uppercase">
          ¡Te damos la bienvenida! a nuestro programa de lealtad.
        </div>
        <p>
          Ya puedes comenzar ganar puntos cada vez que realices una compra y
          disfrutar de recompensas.
        </p>
        <div>
          Hemos enviado un mail a tu correo electrónico con todo lo que
          necesitas saber sobre Love Your Body Club.
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

RegistrationConfirm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default RegistrationConfirm;
