/**
 *
 * SetPasswordPage
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
import makeSelectSetPasswordPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Breadcrumb from '../../components/Breadcrumb';
import SetPasswordForm from './Form';
import { setPasswordAction } from './actions';
import Alert from '../../components/AlertModal';
import { Auth } from '../App/helpers';
import SetPasswordConfirm from './Confirm';

export function SetPasswordPage({ match, setPasswordPage, dispatch }) {
  useInjectReducer({ key: 'setPasswordPage', reducer });
  useInjectSaga({ key: 'setPasswordPage', saga });

  useEffect(() => {
    if (Auth.isLoggedIn()) {
      dispatch(push('/mi-cuenta'));
    }
  });
  const { success } = setPasswordPage;
  return (
    <div>
      <Helmet>
        <title>Restablecer contraseña</title>
        <meta name="description" content="Restablecer contraseña" />
      </Helmet>
      <Breadcrumb
        breadcrumbs={[{ title: 'Restablecer contraseña' }]}
        dispatch={dispatch}
      />
      {!success && (
        <>
          <Alert {...setPasswordPage} />
          <SetPasswordForm
            setPasswordPage={setPasswordPage}
            dispatch={dispatch}
            onSetPassword={data =>
              dispatch(
                setPasswordAction({
                  ...match.params,
                  ...data,
                }),
              )
            }
          />
        </>
      )}
      {success && <SetPasswordConfirm dispatch={dispatch} />}
    </div>
  );
}

SetPasswordPage.propTypes = {
  match: PropTypes.object,
  setPasswordPage: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  setPasswordPage: makeSelectSetPasswordPage(),
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

export default compose(withConnect)(SetPasswordPage);
