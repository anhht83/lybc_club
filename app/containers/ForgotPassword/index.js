/**
 *
 * ForgotPassword
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectForgotPassword from './selectors';
import reducer from './reducer';
import saga from './saga';
import A from '../../components/A';
import ForgotPasswordModal from './Modal';
import { resetPasswordAction, toggleModal } from './actions';
export function ForgotPassword({
  text = '¿Has olvidado tu contraseña?',
  forgotPassword,
  dispatch,
}) {
  useInjectReducer({ key: 'forgotPassword', reducer });
  useInjectSaga({ key: 'forgotPassword', saga });
  return (
    <>
      <A
        onClick={evt => {
          evt.preventDefault();
          dispatch(toggleModal());
        }}
      >
        {text}
      </A>
      <ForgotPasswordModal
        forgotPassword={forgotPassword}
        show={forgotPassword.toggleModal}
        onClose={() => dispatch(toggleModal())}
        onSubmit={({ email }) => dispatch(resetPasswordAction(email))}
      />
    </>
  );
}

ForgotPassword.propTypes = {
  text: PropTypes.string,
  forgotPassword: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  forgotPassword: makeSelectForgotPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ForgotPassword);
