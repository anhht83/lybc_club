/*
 *
 * EditProfilePage actions
 *
 */

import {
  EDIT_PROFILE_ACTION,
  EDIT_PROFILE_ERROR_ACTION,
  EDIT_PROFILE_SUCCESS_ACTION,
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

export function editProfileAction(data) {
  return {
    type: EDIT_PROFILE_ACTION,
    data,
  };
}

export function editProfileSuccessAction(responsive) {
  return {
    type: EDIT_PROFILE_SUCCESS_ACTION,
    responsive,
  };
}
export function editProfileErrorAction(error) {
  return {
    type: EDIT_PROFILE_ERROR_ACTION,
    error,
  };
}
