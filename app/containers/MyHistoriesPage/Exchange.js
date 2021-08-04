/**
 *
 * MyHistoriesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FormattedNumber } from 'react-intl';

export function Exchange({ history }) {
  return (
    <div className="history-item">
      <div className="history-item-date">
        {moment(history.acf.history_date).format('DD-MM-YYYY')}
      </div>
      <div className="history-item-detail">
        <span className="font-weight-bold">
          Cupón canjeado{' '}
          <span className="text-purple font-weight-bolder">
            {history.acf.used_coupon}
          </span>{' '}
        </span>
        <br />
        Canje coupón <b>1</b> {' / '}
        <FormattedNumber value={history.acf.balance}>
          {val => (
            <>
              Monto acumulado <b>${val}</b>
            </>
          )}
        </FormattedNumber>
      </div>
    </div>
  );
}

Exchange.propTypes = {
  history: PropTypes.object,
};

export default Exchange;
