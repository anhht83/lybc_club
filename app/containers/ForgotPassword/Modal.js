/**
 *
 * ForgotPassword
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import ExField from '../../components/ExField';
import Button from '../../components/Button';
import Alert from '../../components/AlertModal';

const ForgotPasswordConfirm = ({ email = '' }) => (
  <>
    <p>
      Hemos enviado la información para restablecer tu contraseña al siguiente
      correo electrónico:
    </p>
    <div className="text-center font-weight-bold pt-2 mb-5 pb-5">
      {`${email.substr(0, 6)} ........ ${email.substr(-3)}`}
    </div>
  </>
);

function ForgotPasswordModal({ show, onClose, onSubmit, forgotPassword }) {
  return (
    <Modal centered show={show} onHide={onClose} backdrop="static">
      <Modal.Body>
        <button className="close" onClick={onClose} />
        <div className="modal-title">¿HAS OLVIDADO TU CONTRASEÑA?</div>
        <Alert error={forgotPassword.error} />
        <Formik initialValues={{ email: '' }} onSubmit={onSubmit}>
          {({ values, handleChange }) => {
            if (!forgotPassword.success)
              return (
                <Form>
                  <p>
                    Escribe la dirección de correo con la que te has registrado
                    y te enviaremos un enlace para restablecer tu contraseña.
                  </p>
                  <ExField
                    label="Dirección de correo electrónico"
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                  />
                  <Button
                    className="btn-block mt-4"
                    text="RESTABLECER CONTRASEÑA"
                    loading={forgotPassword.loading}
                  />
                </Form>
              );
            return <ForgotPasswordConfirm email={values.email} />;
          }}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

ForgotPasswordModal.propTypes = {
  show: PropTypes.bool,
  forgotPassword: PropTypes.object,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ForgotPasswordModal;
