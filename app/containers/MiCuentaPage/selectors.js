import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the miCuentaPage state domain
 */

const selectMiCuentaPageDomain = state => state.miCuentaPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MiCuentaPage
 */

const makeSelectMiCuentaPage = () =>
  createSelector(
    selectMiCuentaPageDomain,
    substate => substate,
  );

export default makeSelectMiCuentaPage;
export { selectMiCuentaPageDomain };
