/**
 *
 * Alert
 *
 */

import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
function AlertModal({ title, error, success }) {
  const [show, setShow] = useState();
  useEffect(() => setShow(!!error || !!success), [error, success]);
  let variant = '';
  let message = '';
  if (success) {
    variant = 'bg-success text-white';
    title = title || 'Solicitud de éxito';
  }
  if (error) {
    variant = 'bg-danger text-white';
    title = title || 'Error';
    message = error.message || error;
  }
  if (show) {
    return (
      <Modal centered size="md" show={show} onHide={() => setShow(false)}>
        <Modal.Body className={variant}>
          <button className="close" onClick={() => setShow(false)} />
          <div className="modal-title text-uppercase">{title}</div>
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </Modal.Body>
      </Modal>
    );
  }
  return null;
}

AlertModal.propTypes = {};

export default AlertModal;
