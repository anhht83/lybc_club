import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

export default function WebModal({profile}) {
  const [show, setShow] = useState();
  const {coupons} = profile;
  return (
    <>
      <Button className="btn-small btn-block" onClick={() => setShow(true)}>
        CANJEAR CUPONES EN TIENDA WEB
      </Button>
      <Modal centered size="md" show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <button className="close" onClick={() => setShow(false)}/>
          <div className="modal-title text-uppercase">
            CANJE DE CUPONES EN TIENDA WEB
          </div>
          <p>
            Al momento de pagar tus productos en nuestra tienda web, Introduce uno de tus cupones disponibles al
            finalizar la compra en
            <a href="https://www.thebodyshop.cl"
               target="_blank">https://www.thebodyshop.cl</a>.
          </p>
          <p> Recuerda que sólo puede utilizar un cupón por compra.
          </p>
          <div className="container-fluid px-sm-4 my-2">
            <div className="row">
              {coupons.enable_detail.map(code => (
                <div key={code} className="col-6 my-2">
                  <div className=" border text-center py-2 ">{code}</div>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
WebModal.propTypes = {
  profile: PropTypes.object,
};
