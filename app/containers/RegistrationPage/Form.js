/**
 *
 * RegistrationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { Form, Formik } from 'formik';
import ExField from '../../components/ExField';
import Button from '../../components/Button';
import A from '../../components/A';
import SelectDate from '../../components/Select/SelectDate';
import Checkbox from '../../components/Checkbox';

export function RegistrationForm({ registrationPage, onSubmit, dispatch }) {
  return (
    <div id="page-content" className="bg-grey">
      <div className="title text-center mt-0">INICIA SESIÓN O REGÍSTRATE</div>
      <ul className="tab justify-content-center">
        <li onClick={() => dispatch(push('/iniciar'))}>INICIO DE SESION</li>
        <li className="active">REGISTRARSE</li>
      </ul>
      <div className="d-flex justify-content-center">
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirm_password: '',
            first_name: '',
            last_name: '',
            acf: {
              rut: '',
              birth_day: '',
              phone: '',
              city: '',
              shop: '',
              contact_method: [],
            },
            r_contact_method_email: false,
            r_contact_method_sms: false,
            r_correo_electronico: false,
            r_birth_day: {
              date: '',
              month: '',
              year: '',
            },
          }}
          onSubmit={values => {
            values.acf.contact_method = [];
            if (values.r_contact_method_email)
              values.acf.contact_method.push('email');
            if (values.r_contact_method_sms)
              values.acf.contact_method.push('sms');
            if (
              values.r_birth_day.date &&
              values.r_birth_day.month &&
              values.r_birth_day.year
            ) {
              values.acf.birth_day = `${values.r_birth_day.date}/${
                values.r_birth_day.month
              }/${values.r_birth_day.year}`;
            }
            onSubmit(values);
          }}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form className="frm-normal-2">
              <div className="form-subtitle">DATOS DE USUARIO</div>
              <div className="row">
                <div className="col-sm-6">
                  <ExField
                    label="Dirección de correo electrónico"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <ExField
                    label="Crear contraseña"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required
                    text="Mínimo 6 caracteres."
                    minlen={6}
                  />
                </div>
                <div className="col-sm-6">
                  <ExField
                    label="Confirmar contraseña"
                    name="confirm_password"
                    type="password"
                    onChange={handleChange}
                    required
                    equalto={values.password}
                    text="Debe ser idéntica a la anterior."
                  />
                </div>
              </div>
              <div className="form-subtitle">DATOS PERSONALES</div>
              <div className="row">
                <div className="col-sm-6">
                  <ExField
                    label="Nombre"
                    name="first_name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <ExField
                    label="Apellidos"
                    name="last_name"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <ExField
                    rut="true"
                    label="RUT"
                    name="acf.rut"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <SelectDate
                      label="Fecha de nacimiento"
                      required
                      names={{
                        date: 'r_birth_day.date',
                        month: 'r_birth_day.month',
                        year: 'r_birth_day.year',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <ExField
                    label="Teléfono"
                    name="acf.phone"
                    placeholder="Ej: +56911111111"
                    onChange={handleChange}
                    text="Campo Opcional."
                  />
                </div>
                <div className="col-sm-6">
                  <ExField
                    label="Ciudad"
                    name="acf.city"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <ExField
                      type="select"
                      name="acf.shop"
                      classNameInput="custom-select mx-1"
                      label="Tienda en la que compras habitualmente"
                      required
                    >
                      <option key={1} value="">
                        Selecciona una Tienda
                      </option>
                      <option key={2} value="shop 1">
                        shop1
                      </option>
                      <option key={3} value="shop 2">
                        shop2
                      </option>
                    </ExField>
                  </div>
                </div>
              </div>
              <div className="py-2">
                Deseo recibir noticias, actualizaciones y ofertas exclusivas de
                The Body Shop.
              </div>
              <Checkbox
                name="r_contact_method_email"
                className="form-check-inline"
                label="Correo electrónico"
                checked={values.r_contact_method_email}
                onChange={() =>
                  setFieldValue(
                    'r_contact_method_email',
                    !values.r_contact_method_email,
                  )
                }
              />
              <Checkbox
                name="r_contact_method_sms"
                className="form-check-inline"
                label="SMS"
                checked={values.r_contact_method_sms}
                onChange={() =>
                  setFieldValue(
                    'r_contact_method_sms',
                    !values.r_contact_method_sms,
                  )
                }
              />
              <Checkbox
                required
                name="r_correo_electronico"
                checked={values.r_correo_electronico}
                onChange={() =>
                  setFieldValue(
                    'r_correo_electronico',
                    !values.r_correo_electronico,
                  )
                }
                label={
                  <div>
                    Confirmo que soy mayor de 18 años y que he leído y estoy de
                    acuerdo con los <br />{' '}
                    <A target="_blank" href="/pagina/terminos-y-condiciones">
                      Términos y condiciones.
                    </A>
                  </div>
                }
              />
              <div className="row">
                <div className="col-sm-6">
                  <Button
                    loading={registrationPage.loading}
                    className="btn-block my-4"
                    text="ENVIAR REGISTRO"
                  />
                </div>
              </div>
              <p>
                Usaremos esta información para gestionar tu cuenta y peticiones
                y con fines de investigación y análisis. Podemos compartir esta
                información con terceros de confianza que actúen en nombre de
                The Body Shop o de otras empresas de The Body Shop. Lee nuestra{' '}
                <A target="_blank" href="/pagina/politicas-de-frivacidad">
                  Políticas de privacidad
                </A>{' '}
                para saber más sobre como tratamos tu información personal.
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

RegistrationForm.propTypes = {
  registrationPage: PropTypes.object,
  onSubmit: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

export default RegistrationForm;
