import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../../components/Button';

export default function FisicaModal() {
  const [show, setShow] = useState();
  return (
    <>
      <Button className="btn-small btn-block" onClick={() => setShow(true)}>
        CANJEAR CUPONES EN TIENDA FÍSICA
      </Button>
      <Modal centered size="md" show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <button className="close" onClick={() => setShow(false)} />
          <div className="modal-title text-uppercase">
            CANJE DE CUPONES EN TIENDA FÍSICA
          </div>
          <p>
            Dirígete a cualquiera de nuestras tiendas, acércate al mesón con tu
            Cédula de identidad, e indica que deseas canjear tus cupones.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
