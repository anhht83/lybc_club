/**
 *
 * MyHistoriesPage
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
import makeSelectMyHistoriesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Breadcrumb from '../../components/Breadcrumb';
import { loadHistoriesAction, queryHistoriesAction } from './actions';
import { Auth } from '../App/helpers';
import AlertModal from '../../components/AlertModal';
import LoadingModal from '../../components/LoadingModal';
import Histories from './Histories';

export function MyHistoriesPage({ myHistoriesPage, dispatch }) {
  useInjectReducer({ key: 'myHistoriesPage', reducer });
  useInjectSaga({ key: 'myHistoriesPage', saga });
  useEffect(() => {
    if (Auth.isLoggedIn()) {
      dispatch(loadHistoriesAction());
    } else {
      dispatch(push('/'));
    }
  }, []);

  const { loading, error } = myHistoriesPage;

  return (
    <div>
      <Helmet>
        <title>Mi Historial</title>
      </Helmet>
      <Breadcrumb
        breadcrumbs={[{ title: 'Mi historial' }]}
        dispatch={dispatch}
      />
      {error && <AlertModal error={error} />}

      <LoadingModal loading={loading} />

      <div id="page-content">
        <div className="title text-center mt-0">Mi historial</div>
        <div className="d-flex justify-content-center">
          <Histories
            dispatch={dispatch}
            onQuery={query => dispatch(queryHistoriesAction(query))}
            myHistoriesPage={myHistoriesPage}
          />
        </div>
      </div>
    </div>
  );
}

MyHistoriesPage.propTypes = {
  myHistoriesPage: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myHistoriesPage: makeSelectMyHistoriesPage(),
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

export default compose(withConnect)(MyHistoriesPage);
