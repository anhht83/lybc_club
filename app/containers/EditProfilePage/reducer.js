/*
 *
 * EditProfilePage reducer
 *
 */
import produce from 'immer';
import {
  EDIT_PROFILE_ACTION,
  EDIT_PROFILE_ERROR_ACTION,
  EDIT_PROFILE_SUCCESS_ACTION,
  LOAD_PROFILE_ACTION,
  LOAD_PROFILE_ERROR_ACTION,
  LOAD_PROFILE_SUCCESS_ACTION,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  profile: false,
  success: false,
};

/* eslint-disable default-case, no-param-reassign */
const editProfilePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PROFILE_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.profile = false;
        draft.success = false;
        break;
      case LOAD_PROFILE_SUCCESS_ACTION:
        draft.loading = false;
        draft.error = false;
        draft.profile = action.response;
        break;
      case LOAD_PROFILE_ERROR_ACTION:
        draft.loading = false;
        draft.error = action.error;
        break;
      case EDIT_PROFILE_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case EDIT_PROFILE_SUCCESS_ACTION:
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
      case EDIT_PROFILE_ERROR_ACTION:
        draft.loading = false;
        draft.error = action.error;
        draft.success = false;
        break;
      default:
        draft.loading = false;
        draft.error = false;
        draft.profile = false;
    }
  });

export default editProfilePageReducer;
