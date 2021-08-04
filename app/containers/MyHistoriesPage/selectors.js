import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myHistoriesPage state domain
 */

const selectMyHistoriesPageDomain = state =>
  state.myHistoriesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyHistoriesPage
 */

const makeSelectMyHistoriesPage = () =>
  createSelector(
    selectMyHistoriesPageDomain,
    substate => substate,
  );

export default makeSelectMyHistoriesPage;
export { selectMyHistoriesPageDomain };
