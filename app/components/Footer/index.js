/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Footer() {
  return (
    <footer>
      <img className="pb-3" src="/the-body-shop.png" />
      <div className="text-b">
        © 2019 THE BODY SHOP CHILE NATURAL, EFICAZ Y SUSTENTABLE
      </div>
      <div className="text-n">
        ® MARCA COMERCIAL REGISTRADA DE THE BODY SHOP INTERNATIONAL LIMITED
        TODOS LOS DERECHOS RESERVADOS.
      </div>
      <div className="text-nav row justify-content-center  no-gutters mt-2">
        <Link
          to="/pagina/terminos-y-condiciones"
          className="col-md-auto px-3 py-2"
        >
          TÉRMINOS Y CONDICIONES
        </Link>
        <Link
          to="/pagina/politicas-de-frivacidad"
          className="col-md-auto px-3 py-2"
        >
          POLÍTICAS DE PRIVACIDAD
        </Link>
        <Link
          to="/pagina/como-funcionan-los-puntos"
          className="col-md-auto px-3 py-2"
        >
          CÓMO FUNCIONAN LOS PUNTOS
        </Link>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
