import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editProfilePage state domain
 */

const selectEditProfilePageDomain = state =>
  state.editProfilePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditProfilePage
 */

const makeSelectEditProfilePage = () =>
  createSelector(
    selectEditProfilePageDomain,
    substate => substate,
  );

export default makeSelectEditProfilePage;
export { selectEditProfilePageDomain };
