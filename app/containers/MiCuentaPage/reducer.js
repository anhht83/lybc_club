/*
 *
 * MiCuentaPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_PROFILE_ACTION,
  LOAD_PROFILE_ERROR_ACTION,
  LOAD_PROFILE_SUCCESS_ACTION,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  profile: false,
};

/* eslint-disable default-case, no-param-reassign */
const miCuentaPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PROFILE_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.profile = false;
        break;
      case LOAD_PROFILE_SUCCESS_ACTION:
        draft.loading = false;
        draft.error = false;
        draft.profile = action.response;
        break;
      case LOAD_PROFILE_ERROR_ACTION:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default miCuentaPageReducer;
