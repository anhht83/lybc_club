/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Helmet } from 'react-helmet';
import messages from './messages';
import Breadcrumb from '../../components/Breadcrumb';
import LoadingModal from '../../components/LoadingModal';
import AlertModal from '../../components/AlertModal';

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Not found page</title>
        <meta name="description" content="Description of StaticPage" />
      </Helmet>
      <Breadcrumb />
      <div id="page-content">
        <div className="title text-center mt-0 text-uppercase">
          Not found page
        </div>
      </div>
    </div>
  );
}
