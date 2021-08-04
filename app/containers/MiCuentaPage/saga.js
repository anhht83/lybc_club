import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_PROFILE_ACTION } from './constants';
import { loadProfileErrorAction, loadProfileSuccessAction } from './actions';
import { API_ROOT } from '../App/constants';

export function* sagaMiCuentaPage() {
  try {
    const response = yield call(
      request,
      `${API_ROOT}/wp/v2/users/me?context=edit`,
    );
    yield put(loadProfileSuccessAction(response));
  } catch (err) {
    yield put(loadProfileErrorAction(err));
  }
}
// Individual exports for testing
export default function* miCuentaPageSaga() {
  yield takeLatest(LOAD_PROFILE_ACTION, sagaMiCuentaPage);
}
