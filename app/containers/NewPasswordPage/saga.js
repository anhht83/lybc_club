import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { SET_PASSWORD_ACTION } from './constants';
import { setPasswordErrorAction, setPasswordSuccessAction } from './actions';
import { API_ROOT } from '../App/constants';
import { Auth } from '../App/helpers';

export function* sagaAuthSetPassword(action) {
  try {
    const response = yield call(request, `${API_ROOT}/bdpwr/v1/set-password`, {
      method: 'post',
      body: action.data,
    });
    yield put(setPasswordSuccessAction(response));
  } catch (err) {
    yield put(setPasswordErrorAction(err));
  }
}
// Individual exports for testing
export default function* setPasswordPageSaga() {
  yield takeLatest(SET_PASSWORD_ACTION, sagaAuthSetPassword);
}
