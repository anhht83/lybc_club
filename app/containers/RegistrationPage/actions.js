/*
 *
 * RegistrationPage actions
 *
 */

import {
  REGISTER_ACTION,
  REGISTER_ERROR_ACTION,
  REGISTER_SUCCESS_ACTION,
} from './constants';

export function registerAction(data) {
  return {
    type: REGISTER_ACTION,
    data,
  };
}

export function registerSuccessAction(responsive) {
  return {
    type: REGISTER_SUCCESS_ACTION,
    responsive,
  };
}
export function registerErrorAction(error) {
  return {
    type: REGISTER_ERROR_ACTION,
    error,
  };
}
