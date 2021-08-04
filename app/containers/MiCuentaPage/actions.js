/*
 *
 * MiCuentaPage actions
 *
 */

import {
  LOAD_PROFILE_ACTION,
  LOAD_PROFILE_ERROR_ACTION,
  LOAD_PROFILE_SUCCESS_ACTION,
} from './constants';

export function loadProfileAction() {
  return {
    type: LOAD_PROFILE_ACTION,
  };
}

export function loadProfileSuccessAction(response) {
  return {
    type: LOAD_PROFILE_SUCCESS_ACTION,
    response,
  };
}
export function loadProfileErrorAction(error) {
  return {
    type: LOAD_PROFILE_ERROR_ACTION,
    error,
  };
}
