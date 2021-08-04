/**
 *
 * StaticPage
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
import makeSelectStaticPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchPageAction } from './actions';
import Breadcrumb from '../../components/Breadcrumb';
import LoadingModal from '../../components/LoadingModal';
import AlertModal from '../../components/AlertModal';

export function StaticPage({ match, staticPage, dispatch }) {
  useInjectReducer({ key: 'staticPage', reducer });
  useInjectSaga({ key: 'staticPage', saga });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (match.params.slug) {
      dispatch(fetchPageAction(match.params.slug));
    }
  }, [match.params.slug]);

  const { loading, error, response } = staticPage;
  const title = response ? response.title.rendered : '...';
  const content = response ? response.content.rendered : '...';
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Description of StaticPage" />
      </Helmet>
      <Breadcrumb breadcrumbs={[{ title }]} dispatch={dispatch} />
      {loading && <LoadingModal loading={loading} />}
      <div id="page-content">
        <div className="title text-center mt-0 text-uppercase">{title}</div>
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <AlertModal error={error} />
    </div>
  );
}

StaticPage.propTypes = {
  match: PropTypes.object,
  staticPage: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  staticPage: makeSelectStaticPage(),
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

export default compose(withConnect)(StaticPage);
