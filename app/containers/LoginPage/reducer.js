/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  LOGIN_ACTION,
  LOGIN_ERROR_ACTION,
  LOGIN_SUCCESS_ACTION,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_ACTION:
        draft.loading = true;
        draft.error = false;
        break;
      case LOGIN_SUCCESS_ACTION:
        draft.loading = false;
        draft.error = false;
        break;
      case LOGIN_ERROR_ACTION:
        draft.loading = false;
        draft.error = action.error;
        break;
      default:
        draft.loading = false;
        draft.error = false;
    }
  });

export default loginPageReducer;
