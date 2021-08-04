/**
 *
 * MyHistoriesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { InputGroup } from 'react-bootstrap';

export function Filter({ myHistoriesPage, onQuery }) {
  const { query = {}, origin_histories: originHistories } = myHistoriesPage;
  const initialSettingsDate = {
    autoUpdateInput: false,
    showDropdowns: true,
    locale: {
      applyLabel: 'Aplicar',
      cancelLabel: 'Cancelar',
    },
  };
  if (query.startDateInvoice && query.endDateInvoice) {
    initialSettingsDate.startDate = query.startDateInvoice;
    initialSettingsDate.endDate = query.endDateInvoice;
  }
  return (
    <div id="filter" className="row">
      <div className="col-md-6 col-sm-12">
        <InputGroup>
          <select
            value={query.name}
            className="form-control"
            onChange={e =>
              onQuery({
                name: e.currentTarget.value,
                showRecords: query.limit, // reset paging
              })
            }
          >
            {[
              ...new Set(
                (originHistories || []).map(
                  history => history.acf.store || 'unknown',
                ),
              ),
            ].map(store => (
              <option key="store">{store}</option>
            ))}
          </select>
          <InputGroup.Append>
            <InputGroup.Text>
              <i className="bi-shop" />
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className="col-md-6 col-sm-12">
        <InputGroup>
          <DateRangePicker
            initialSettings={initialSettingsDate}
            onApply={(e, picker) => {
              picker.element.val(
                `${picker.startDate.format(
                  'DD/MM/YYYY',
                )} - ${picker.endDate.format('DD/MM/YYYY')}`,
              );
              onQuery({
                startDateInvoice: picker.startDate.format('YYYY-MM-DD'),
                endDateInvoice: picker.endDate.format('YYYY-MM-DD'),
                showRecords: query.limit, // reset paging
              });
            }}
            onCancel={(e, picker) => {
              picker.element.val('');
              onQuery({
                startDateInvoice: null,
                endDateInvoice: null,
              });
            }}
          >
            <input
              type="text"
              defaultValue=""
              className="form-control"
              placeholder="Fechas de factura"
              onKeyPress={e => {
                e.preventDefault();
                return false;
              }}
            />
          </DateRangePicker>
          <InputGroup.Append>
            <InputGroup.Text>
              <i className="bi-calendar-range" />
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
}

Filter.propTypes = {
  myHistoriesPage: PropTypes.object,
  onQuery: PropTypes.func,
};

export default Filter;
