/*
 *
 * ForgotPassword reducer
 *
 */
import produce from 'immer';
import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_ERROR_ACTION,
  RESET_PASSWORD_SUCCESS_ACTION,
  TOGGLE_MODAL,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  success: false,
  toggleModal: false,
};

/* eslint-disable default-case, no-param-reassign */
const forgotPasswordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_MODAL:
        draft.toggleModal = !state.toggleModal;
        draft.loading = false;
        draft.error = false;
        draft.success = false;
        break;
      case RESET_PASSWORD_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case RESET_PASSWORD_SUCCESS_ACTION:
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
      case RESET_PASSWORD_ERROR_ACTION:
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

export default forgotPasswordReducer;
