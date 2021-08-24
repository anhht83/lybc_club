/**
 *
 * MyHistoriesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import Exchange from './Exchange';
import Expired from './Expired';
import Invoice from './Invoice';
import Button from '../../components/Button';
import Filter from './Filter';

export function Histories({ myHistoriesPage, onQuery, dispatch }) {
  const { histories, query } = myHistoriesPage;

  const buttons = (
    <>
      {query.hasRecords && (
        <Button
          onClick={() =>
            onQuery({
              showRecords: query.showRecords + query.limit,
            })
          }
          className="btn-block mb-2"
          text="Carga más"
        />
      )}
      <Button
        onClick={() => dispatch(push('/'))}
        className="btn-block"
        text="VOLVER"
      />
    </>
  );

  if (
    myHistoriesPage.origin_histories &&
    myHistoriesPage.origin_histories.length > 0
  ) {
    return (
      <div className="flex-column">
        <Filter myHistoriesPage={myHistoriesPage} onQuery={onQuery} />
        <div className="justify-content-center d-flex">
          <div className={`histories ${histories.length > 0 ? '' : 'ml-0'}`}>
            <div>
              {histories.map(history => {
                switch (history.acf.history_type) {
                  case 'exchange_coupon':
                    return <Exchange key={history.id} history={history} />;
                  case 'expired':
                    return <Expired key={history.id} history={history} />;
                  default:
                    return <Invoice key={history.id} history={history} />;
                }
              })}
            </div>
            <div className="d-none d-sm-block ">{buttons}</div>
          </div>
        </div>
        <div className="d-sm-none">{buttons}</div>
      </div>
    );
  }
  return (
    <div className="col-md-5" id="icomo">
      <div className="item-2">
        <div className="name">COMPRA Y JUNTA PUNTOS</div>
        <div className="sub-name">$60.000 EN COMPRAS = 1 CUPÓN DE $5.000</div>
        <div className="text-center">
          Al acumular $60.000 en compras, recibirás un cupón de $5.000, que
          puedes usar para regalarte tus productos favoritos.
        </div>
      </div>
    </div>
  );
}

Histories.propTypes = {
  myHistoriesPage: PropTypes.object,
  onQuery: PropTypes.func,
  dispatch: PropTypes.func,
};

export default Histories;
