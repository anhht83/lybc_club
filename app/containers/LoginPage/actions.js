/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN_ACTION,
  LOGIN_ERROR_ACTION,
  LOGIN_SUCCESS_ACTION,
} from './constants';

export function loginAction(credentials) {
  console.log(loginAction)
  return {
    type: LOGIN_ACTION,
    credentials,
  };
}

export function loginSuccessAction(response) {
  return {
    type: LOGIN_SUCCESS_ACTION,
    response,
  };
}

export function loginErrorAction(error) {
  return {
    type: LOGIN_ERROR_ACTION,
    error,
  };
}
