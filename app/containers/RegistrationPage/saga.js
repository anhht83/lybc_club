import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { REGISTER_ACTION } from './constants';
import { registerErrorAction, registerSuccessAction } from './actions';
import { API_ROOT } from '../App/constants';

export function* sagaRegistration(action) {
  try {
    const { data } = action;
    const response = yield call(request, `${API_ROOT}/wp/v2/register`, {
      method: 'post',
      body: data,
    });
    yield put(registerSuccessAction(response));
  } catch (err) {
    yield put(registerErrorAction(err));
  }
}
// Individual exports for testing
export default function* registrationPageSaga() {
  yield takeLatest(REGISTER_ACTION, sagaRegistration);
}
