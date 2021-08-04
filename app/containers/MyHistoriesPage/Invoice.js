/**
 *
 * MyHistoriesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import moment from 'moment';
export function Invoice({ history }) {
  return (
    <div className="history-item">
      <div className="history-item-date">
        {moment(history.acf.history_date).format('DD-MM-YYYY')}
      </div>
      <div className="history-item-detail">
        <span className="font-weight-bold">Compra {history.acf.store} </span>
        <FormattedNumber value={history.acf.amount}>
          {val => (
            <span className="text-purple font-weight-bolder">${val}</span>
          )}
        </FormattedNumber>
        <br />
        {history.acf.new_coupon > 0 && (
          <>
            Cupón Disponible{history.acf.enable_coupon > 1 ? 's' : ''}{' '}
            <b>{history.acf.enable_coupon}</b> {' / '}
          </>
        )}
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

Invoice.propTypes = {
  history: PropTypes.object,
};

export default Invoice;
