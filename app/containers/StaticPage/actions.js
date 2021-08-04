/*
 *
 * StaticPage actions
 *
 */

import {
  FETCH_PAGE_ACTION,
  FETCH_PAGE_SUCCESS_ACTION,
  FETCH_PAGE_ERROR_ACTION,
} from './constants';

export function fetchPageAction(slug) {
  return {
    type: FETCH_PAGE_ACTION,
    slug,
  };
}

export function fetchPageSuccessAction(response) {
  return {
    type: FETCH_PAGE_SUCCESS_ACTION,
    response,
  };
}

export function fetchPageErrorAction(error) {
  return {
    type: FETCH_PAGE_ERROR_ACTION,
    error,
  };
}
