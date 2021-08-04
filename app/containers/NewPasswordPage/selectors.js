import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the setPasswordPage state domain
 */

const selectSetPasswordPageDomain = state =>
  state.setPasswordPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SetPasswordPage
 */

const makeSelectSetPasswordPage = () =>
  createSelector(
    selectSetPasswordPageDomain,
    substate => substate,
  );

export default makeSelectSetPasswordPage;
export { selectSetPasswordPageDomain };
