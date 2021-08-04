/**
 *
 * LoginPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Breadcrumb from '../../components/Breadcrumb';
import LoginForm from './Form';
import { loginAction } from './actions';
import Alert from '../../components/AlertModal';
import { Auth } from '../App/helpers';

export function LoginPage({ loginPage, dispatch }) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  useEffect(() => {
    if (Auth.isLoggedIn()) {
      dispatch(push('/mi-cuenta'));
    }
  });

  return (
    <div>
      <Helmet>
        <title>Iniciar sesión</title>
        <meta name="description" content="Iniciar sesión" />
      </Helmet>
      <Breadcrumb
        breadcrumbs={[{ title: 'Iniciar sesión' }]}
        dispatch={dispatch}
      />
      <Alert
        {...loginPage}
        title={loginPage.error ? loginPage.error.title : ''}
      />
      <LoginForm
        loginPage={loginPage}
        dispatch={dispatch}
        onLogin={credentials => dispatch(loginAction(credentials))}
      />
    </div>
  );
}

LoginPage.propTypes = {
  loginPage: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
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

export default compose(withConnect)(LoginPage);
