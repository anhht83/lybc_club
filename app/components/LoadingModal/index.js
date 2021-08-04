/**
 *
 * Alert
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
function LoadingModal({ loading, message = 'Recuperacion de datos' }) {
  const [show, setShow] = useState(loading);
  useEffect(() => setShow(loading), [loading]);
  return (
    <Modal
      centered
      backdrop="static"
      size="sm"
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-loading"
    >
      <Modal.Body>
        <img src="/LOGO-LYBC.gif" alt="" />
      </Modal.Body>
    </Modal>
  );
}

LoadingModal.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
};

export default LoadingModal;
