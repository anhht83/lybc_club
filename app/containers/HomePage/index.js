/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {push} from 'connected-react-router';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {compose} from 'redux';
import LoginButton from '../../components/LoginButton';
import Breadcrumb from '../../components/Breadcrumb';
import {Auth} from '../App/helpers';

export function HomePage({dispatch}) {
  useEffect(() => {
    if (Auth.isLoggedIn()) {
      dispatch(push('/mi-cuenta'));
    }
  });
  return (
    <>
      <Helmet>
        <title>The Body Shop</title>
        <meta name="description" content="The Body Shop"/>
      </Helmet>
      <Breadcrumb dispatch={dispatch}/>
      <div className="container">
        <div className="text-center pt-md-2">
          <div className="title">¡BIENVENIDO AL CLUB!</div>
          <div className="pb-3 pb-md-4">
            Nuestro programa de lealtad te permitirá ganar puntos cada vez que
            realices una compra, ganando recompensas, así que no te lo pienses
            más.
          </div>
          <LoginButton/>
        </div>
      </div>
      <div id="icomo">
        <div className="title-2">¡CÓMO FUNCIONA!</div>
        <div className="item item-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 content order-1">
                <div className="num">1</div>
                <div className="name">REGÍSTRATE</div>
                <div className="des">PUEDES UNIRTE DE UNA SENCILLA FORMA</div>
              </div>
              <div className="col-md-6 col-12 order-2">
                <img
                  onClick={() => dispatch(push('/registrate'))}
                  alt=""
                  src="/item-1.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="item item-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 content order-1 order-md-2">
                <div className="num">2</div>
                <div className="name">COMPRA Y JUNTA PUNTOS</div>
                <div className="sub-name">$60.000 EN COMPRAS = 1 CUPÓN</div>
                <div className="">
                  Al acumular $60.000 en compras, recibirás un cupón de $5.000,
                  que puedes usar para regalarte tus productos favoritos.
                </div>
              </div>
              <div className="col-md-6 col-12 order-2 order-md-1">
                <img alt="" src="/item-2.jpg"/>
              </div>
            </div>
          </div>
        </div>
        <div className="item item-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 content order-1">
                <div className="num">3</div>
                <div className="name">CANJEA TUS PUNTOS</div>
                <div className="">
                  Para utilizarlos, solo debes dirigirte a nuestras tiendas con tu CI o utilízalos en nuestra tienda
                  web.
                </div>
              </div>
              <div className="col-md-6 col-12 order-2">
                <img alt="" src="/item-3.jpg"/>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3">
          <div className="container text-center">
            <div className="title mt-4 text-center">
              ¡ADEMÁS, TENEMOS MUCHAS SORPRESAS!
            </div>
            <img
              alt=""
              src="/item-4.png"
              style={{maxWidth: '100%', width: 'auto'}}
            />
            <div className="p-3">
              Unirse al club es gratis y nos encanta consentir a nuestros
              miembros. Recibe regalos sorpresa, ofertas exclusivas para
              miembros, avances de nuevos productos e invitaciones para eventos
              exclusivos.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
