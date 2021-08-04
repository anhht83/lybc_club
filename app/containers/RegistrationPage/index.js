/**
 *
 * RegistrationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRegistrationPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Breadcrumb from '../../components/Breadcrumb';
import RegistrationForm from './Form';
import { registerAction } from './actions';
import AlertModal from '../../components/AlertModal';
import RegistrationConfirm from './Confirm';

export function RegistrationPage({ registrationPage, dispatch }) {
  useInjectReducer({ key: 'registrationPage', reducer });
  useInjectSaga({ key: 'registrationPage', saga });
  const { success } = registrationPage;
  return (
    <div>
      <Helmet>
        <title>Registrarse</title>
        <meta name="description" content="Registrarse" />
      </Helmet>
      <Breadcrumb
        breadcrumbs={[
          { title: success ? 'Confirmación registro' : 'Registrarse' },
        ]}
        dispatch={dispatch}
      />
      {!success && (
        <>
          <AlertModal error={registrationPage.error} />
          <RegistrationForm
            registrationPage={registrationPage}
            dispatch={dispatch}
            onSubmit={data => dispatch(registerAction(data))}
          />
        </>
      )}
      {success && <RegistrationConfirm dispatch={dispatch} />}
    </div>
  );
}

RegistrationPage.propTypes = {
  registrationPage: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registrationPage: makeSelectRegistrationPage(),
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

export default compose(withConnect)(RegistrationPage);
