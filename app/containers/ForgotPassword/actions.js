/*
 *
 * ForgotPassword actions
 *
 */

import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_ERROR_ACTION,
  RESET_PASSWORD_SUCCESS_ACTION,
  TOGGLE_MODAL,
} from './constants';

export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
  };
}

export function resetPasswordAction(email) {
  return {
    type: RESET_PASSWORD_ACTION,
    email,
  };
}

export function resetPasswordSuccessAction(response) {
  return {
    type: RESET_PASSWORD_SUCCESS_ACTION,
    response,
  };
}

export function resetPasswordErrorAction(error) {
  return {
    type: RESET_PASSWORD_ERROR_ACTION,
    error,
  };
}
