/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { Formik, Form } from 'formik';
import ExField from '../../components/ExField';
import Button from '../../components/Button';
import A from '../../components/A';
import ForgotPassword from '../ForgotPassword';

export function LoginForm({ loginPage, dispatch, onLogin }) {
  return (
    <div id="page-content" className="bg-grey">
      <div className="title text-center mt-0">INICIA SESIÓN O REGÍSTRATE</div>
      <ul className="tab justify-content-center">
        <li className="active">INICIO DE SESION</li>
        <li onClick={() => dispatch(push('/registrate'))}>REGISTRARSE</li>
      </ul>
      <div className="d-flex justify-content-center">
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={onLogin}
        >
          {({ handleChange }) => (
            <Form className="text-left frm-normal">
              <ExField
                classNameInput="form-control-highlight"
                label="Dirección de correo electrónico"
                name="username"
                type="email"
                onChange={handleChange}
                required
              />
              <ExField
                classNameGroup="mb-3"
                onChange={handleChange}
                classNameInput="form-control-highlight"
                label="Contraseña"
                name="password"
                type="password"
                required
              />
              <ForgotPassword text="¿Has olvidado tu contraseña?" />
              <Button
                loading={loginPage.loading}
                className="btn-block my-4"
                text="INICIAR SESIÓN"
              />

              <div className="font-weight-bold">
                ¿Aún no te has registrado?{' '}
                <A href="/registrate" id="action-forgot-password">
                  Regístrate
                </A>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  loginPage: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  onLogin: PropTypes.func,
};

export default LoginForm;
