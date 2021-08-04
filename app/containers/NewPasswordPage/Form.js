/**
 *
 * SetPasswordPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import ExField from '../../components/ExField';
import Button from '../../components/Button';

export function SetPasswordForm({ setPasswordPage, onSetPassword }) {
  return (
    <div id="page-content">
      <div className="title text-center mt-0 mb-0">RESTABLECER CONTRASEÑA</div>
      <div className="d-flex justify-content-center">
        <Formik
          initialValues={{ password: '', confirm_password: '' }}
          onSubmit={onSetPassword}
        >
          {({ values, handleChange }) => (
            <Form className="text-left frm-normal">
              <ExField
                label="Crear nueva contraseña"
                name="password"
                type="password"
                onChange={handleChange}
                required
                text="Mínimo 6 caracteres."
                minlen={6}
              />
              <ExField
                label="Confirmar contraseña"
                name="confirm_password"
                type="password"
                onChange={handleChange}
                required
                equalto={values.password}
                text="Debe ser idéntica a la anterior."
              />
              <Button
                loading={setPasswordPage.loading}
                className="btn-block my-4"
                text="ACEPTAR"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

SetPasswordForm.propTypes = {
  setPasswordPage: PropTypes.object,
  onSetPassword: PropTypes.func,
};

export default SetPasswordForm;
