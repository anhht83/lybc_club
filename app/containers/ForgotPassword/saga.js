import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { RESET_PASSWORD_ACTION } from './constants';
import {
  resetPasswordErrorAction,
  resetPasswordSuccessAction,
} from './actions';
import { API_ROOT } from '../App/constants';

export function* postForgotPasswordSaga(action) {
  try {
    const { email } = action;
    const response = yield call(
      request,
      `${API_ROOT}/bdpwr/v1/reset-password`,
      {
        method: 'post',
        body: { email },
      },
    );
    yield put(resetPasswordSuccessAction(response));
  } catch (err) {
    yield put(resetPasswordErrorAction(err));
  }
}
// Individual exports for testing
export default function* forgotPasswordSaga() {
  yield takeLatest(RESET_PASSWORD_ACTION, postForgotPasswordSaga);
}
