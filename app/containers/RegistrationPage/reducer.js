/*
 *
 * RegistrationPage reducer
 *
 */
import produce from 'immer';
import {
  REGISTER_ACTION,
  REGISTER_ERROR_ACTION,
  REGISTER_SUCCESS_ACTION,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  success: false,
};

/* eslint-disable default-case, no-param-reassign */
const registrationPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case REGISTER_SUCCESS_ACTION:
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
      case REGISTER_ERROR_ACTION:
        draft.loading = false;
        draft.error = action.error;
        draft.success = false;
        break;
      default:
        draft.loading = false;
        draft.error = false;
        draft.success = false;
    }
  });

export default registrationPageReducer;
