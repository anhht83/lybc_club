/*
 *
 * SetPasswordPage reducer
 *
 */
import produce from 'immer';
import {
  SET_PASSWORD_ACTION,
  SET_PASSWORD_ERROR_ACTION,
  SET_PASSWORD_SUCCESS_ACTION,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  success: false,
};

/* eslint-disable default-case, no-param-reassign */
const setPasswordPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PASSWORD_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case SET_PASSWORD_SUCCESS_ACTION:
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
      case SET_PASSWORD_ERROR_ACTION:
        draft.loading = false;
        draft.error = action.error;
        draft.success = false;
        break;
      default:
        draft.loading = false;
        draft.error = false;
        draft.success = false;
    }
  });

export default setPasswordPageReducer;
