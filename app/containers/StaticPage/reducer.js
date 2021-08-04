/*
 *
 * StaticPage reducer
 *
 */
import produce from 'immer';
import {
  FETCH_PAGE_ACTION,
  FETCH_PAGE_ERROR_ACTION,
  FETCH_PAGE_SUCCESS_ACTION,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  response: false,
};

/* eslint-disable default-case, no-param-reassign */
const staticPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_PAGE_ACTION:
        draft.loading = true;
        draft.error = false;
        break;
      case FETCH_PAGE_SUCCESS_ACTION:
        draft.loading = false;
        draft.error = false;
        draft.response =
          action.response && action.response.length > 0
            ? action.response[0]
            : false;
        break;
      case FETCH_PAGE_ERROR_ACTION:
        draft.loading = false;
        draft.error = action.error;
        break;
      default:
        draft.loading = false;
        draft.error = false;
        draft.data = false;
    }
  });

export default staticPageReducer;
