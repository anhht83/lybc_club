/*
 *
 * SetPasswordPage actions
 *
 */

import {
  SET_PASSWORD_ACTION,
  SET_PASSWORD_ERROR_ACTION,
  SET_PASSWORD_SUCCESS_ACTION,
} from './constants';

export function setPasswordAction(data) {
  return {
    type: SET_PASSWORD_ACTION,
    data,
  };
}

export function setPasswordSuccessAction(response) {
  return {
    type: SET_PASSWORD_SUCCESS_ACTION,
    response,
  };
}

export function setPasswordErrorAction(error) {
  return {
    type: SET_PASSWORD_ERROR_ACTION,
    error,
  };
}
