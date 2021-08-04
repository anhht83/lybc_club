/**
 *
 * EditProfileForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import Button from '../../components/Button';

export function EditProfileConfirm({ dispatch }) {
  return (
    <div id="page-content">
      <div className="title text-center mt-0">EDITAR MI PERFIL</div>
      <div className="row justify-content-center no-gutters">
        <div className="frm-normal text-center py-0">
          <div>Tu perfil ha sido actualizado.</div>
          <Button
            className="btn-block mt-4 mb-3"
            onClick={() => dispatch(push('/iniciar'))}
            text="VOLVER AL INICIO"
          />
        </div>
      </div>
    </div>
  );
}

EditProfileConfirm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default EditProfileConfirm;
