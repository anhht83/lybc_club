import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the staticPage state domain
 */

const selectStaticPageDomain = state => state.staticPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StaticPage
 */

const makeSelectStaticPage = () =>
  createSelector(
    selectStaticPageDomain,
    substate => substate,
  );

export default makeSelectStaticPage;
export { selectStaticPageDomain };
