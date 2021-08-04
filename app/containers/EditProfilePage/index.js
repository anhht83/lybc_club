/**
 *
 * EditProfilePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEditProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Breadcrumb from '../../components/Breadcrumb';
import EditProfileForm from './Form';
import { editProfileAction, loadProfileAction } from './actions';
import AlertModal from '../../components/AlertModal';
import { Auth } from '../App/helpers';
import LoadingModal from '../../components/LoadingModal';
import EditProfileConfirm from './Confirm';

export function EditProfilePage({ editProfilePage, dispatch }) {
  useInjectReducer({ key: 'editProfilePage', reducer });
  useInjectSaga({ key: 'editProfilePage', saga });

  useEffect(() => {
    if (Auth.isLoggedIn()) {
      dispatch(loadProfileAction());
    }
  }, []);

  const { loading, error, success, profile } = editProfilePage;
  return (
    <div>
      <Helmet>
        <title>Registrarse</title>
        <meta name="description" content="Registrarse" />
      </Helmet>
      <Breadcrumb
        breadcrumbs={[{ title: 'Editar mi perfil' }]}
        dispatch={dispatch}
      />
      {error && <AlertModal error={error} />}
      <LoadingModal loading={loading} />
      {profile && !success && (
        <>
          <EditProfileForm
            editProfilePage={editProfilePage}
            dispatch={dispatch}
            onSubmit={data =>
              dispatch(editProfileAction({ id: profile.id, ...data }))
            }
          />
        </>
      )}
      {success && <EditProfileConfirm dispatch={dispatch} />}
    </div>
  );
}

EditProfilePage.propTypes = {
  editProfilePage: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editProfilePage: makeSelectEditProfilePage(),
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

export default compose(withConnect)(EditProfilePage);
