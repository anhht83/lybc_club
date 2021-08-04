/**
 *
 * EditProfileForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { Form, Formik } from 'formik';
import ExField from '../../components/ExField';
import Button from '../../components/Button';
import SelectDate from '../../components/Select/SelectDate';
import Checkbox from '../../components/Checkbox';

export function EditProfileForm({ editProfilePage, onSubmit, dispatch }) {
  const { profile = {} } = editProfilePage;
  const dates = (profile.acf.birth_day || '').split('/');
  return (
    <div id="page-content">
      <div className="title text-center mt-0">EDITAR MI PERFIL</div>
      <div className="d-flex justify-content-center">
        <Formik
          enableReinitialize
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
            r_contact_method_email: (profile.acf.contact_method || []).find(
              item => item === 'email',
            ),
            r_contact_method_sms: (profile.acf.contact_method || []).find(
              item => item === 'sms',
            ),
            r_birth_day: {
              date: dates[0] || '',
              month: dates[1] || '',
              year: dates[2] || '',
            },
            ...profile,
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
          {({ values, handleChange, submitForm, setFieldValue }) => (
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
                    required={!profile.id}
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
                    required={!profile.id}
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
                    disabled={!!profile.id}
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
                      disabled={!!profile.id}
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
              <div className="row">
                <div className="col-sm-6">
                  <Button
                    loading={editProfilePage.loading}
                    onClick={submitForm}
                    className="btn-block my-4"
                    text="ACTUALIZAR"
                  />
                </div>
                <div className="col-sm-6">
                  <Button
                    loading={editProfilePage.loading}
                    onClick={() => dispatch(push('mi-cuenta'))}
                    color="light"
                    className="btn-block my-4"
                    text="CANCELAR Y VOLVER"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

EditProfileForm.propTypes = {
  editProfilePage: PropTypes.object,
  onSubmit: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

export default EditProfileForm;
