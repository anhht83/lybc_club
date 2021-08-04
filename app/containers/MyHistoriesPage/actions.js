/*
 *
 * MyHistoriesPage actions
 *
 */

import {
  LOAD_HISTORIES_ACTION,
  LOAD_HISTORIES_ERROR_ACTION,
  LOAD_HISTORIES_SUCCESS_ACTION,
  QUERY_HISTORIES_ACTION,
} from './constants';

export function queryHistoriesAction(query = {}) {
  return {
    type: QUERY_HISTORIES_ACTION,
    query,
  };
}

export function loadHistoriesAction() {
  return {
    type: LOAD_HISTORIES_ACTION,
  };
}

export function loadHistoriesSuccessAction(response) {
  return {
    type: LOAD_HISTORIES_SUCCESS_ACTION,
    response,
  };
}
export function loadHistoriesErrorAction(error) {
  return {
    type: LOAD_HISTORIES_ERROR_ACTION,
    error,
  };
}
