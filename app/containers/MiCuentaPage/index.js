/**
 *
 * MiCuentaPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import moment from 'moment';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { FormattedNumber } from 'react-intl';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import { loadProfileAction } from './actions';
import makeSelectMiCuentaPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import AlertModal from '../../components/AlertModal';
import LoadingModal from '../../components/LoadingModal';
import { Auth } from '../App/helpers';
import FisicaModal from "./FisicaModal";
import WebModal from "./WebModal";


export function MiCuentaPage({ miCuentaPage, dispatch }) {
  useInjectReducer({ key: 'miCuentaPage', reducer });
  useInjectSaga({ key: 'miCuentaPage', saga });

  useEffect(() => {
    if (Auth.isLoggedIn()) {
      dispatch(loadProfileAction());
    }
  }, []);

  const { loading, error, profile } = miCuentaPage;
  return (
    <div>
      <Helmet>
        <title>Mi Cuenta</title>
      </Helmet>
      <Breadcrumb breadcrumbs={[{ title: 'Mi Cuenta' }]} dispatch={dispatch} />
      {error && <AlertModal error={error} />}
      <LoadingModal loading={loading} />
      {profile && (
        <div id="page-content">
          <div className="title text-center text-uppercase mt-0">Mi cuenta</div>
          <div className="container" >
            <div className="row">
              <div className="col-md-6">
                <div className="mi-cuenta">
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={(props) => <Tooltip id="button-tooltip" {...props}>
                      Cada 60.000 se genera un cupón para que puedas usar en nuestras tiendas
                    </Tooltip>}
                  >
                    <div className="mi-cuenta-item">
                      <div className="mi-cuenta-title mi-cuenta-title-1 align-items-center justify-content-between d-flex">
                        <span>MONTO ACUMULADO</span>{' '}
                        <FormattedNumber value={profile.acf.balance || 0}>
                          {val => <span className="no">${val}</span>}
                        </FormattedNumber>
                      </div>
                      {profile.coupons.expired_coming && (
                        <div className="mi-cuenta-des align-items-center justify-content-between d-flex">
                          <span>
                          Cupones por vencer al{' '}
                            {moment(profile.coupons.expired_coming.date).format(
                              'DD-MM-YYYY',
                            )}
                          </span>
                          <FormattedNumber
                            value={profile.coupons.expired_coming.count}
                          >
                            {val => <span className="no">{val}</span>}
                          </FormattedNumber>
                        </div>
                      )}
                    </div>
                  </OverlayTrigger>

                  <div className="mi-cuenta-item">
                    <div className="mi-cuenta-title mi-cuenta-title-2  align-items-center justify-content-between d-flex">
                      <span>
                        CUPONES DE $5.000 DISPONIBLES
                      </span>
                      <span className="no">{profile.coupons.enable}</span>
                    </div>
                    <div className="mi-cuenta-des">
                      <b>Puedes canjear 1 cupón por compra</b>
                      <br />
                      Para utilizarlos, solo debes dirigirte a nuestras tiendas con tu CI o utilízalos en nuestra tienda web.
                    </div>
                    <div className='row mt-3'>
                      <div className="col-md-6">
                        <WebModal profile={profile}/>
                      </div>
                      <div className="col-md-6">
                        <FisicaModal />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <Button
                    onClick={() => dispatch(push('mi-historial'))}
                    className="btn-block text-left"
                  >
                    MI HISTORIAL{' '}
                    <img
                      alt=""
                      className="float-right p-1"
                      src="/icon-right.png"
                    />
                  </Button>
                  <Button
                    onClick={() => dispatch(push('mi-perfil'))}
                    className="btn-block text-left"
                  >
                    EDITAR MI PERFIL{' '}
                    <img
                      alt=""
                      className="float-right p-1"
                      src="/icon-right.png"
                    />
                  </Button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mi-cuenta">
                  <div
                    className={`mi-cuenta-2 ${!profile.options.isBirthday? 'bg_cover' : ''}`}
                    style={{ backgroundImage: `url(${profile.options.user_banner})` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

MiCuentaPage.propTypes = {
  miCuentaPage: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  miCuentaPage: makeSelectMiCuentaPage(),
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

export default compose(withConnect)(MiCuentaPage);
