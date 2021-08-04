/**
 *
 * MyHistoriesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
export function Expired({ history }) {
  return (
    <div className="history-item">
      <div className="history-item-date">
        {moment(history.acf.history_date).format('DD-MM-YYYY')}
      </div>
      <div className="history-item-detail">
        Vencimiento <b>{history.acf.expired_coupon_count}</b> copón
      </div>
    </div>
  );
}

Expired.propTypes = {
  history: PropTypes.object,
};

export default Expired;
