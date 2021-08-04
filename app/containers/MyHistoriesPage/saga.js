import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_HISTORIES_ACTION } from './constants';
import {
  loadHistoriesErrorAction,
  loadHistoriesSuccessAction,
} from './actions';
import { API_ROOT } from '../App/constants';

export function* sagaHistoriesPage() {
  try {
    const response = yield call(request, `${API_ROOT}/wp/v2/history`);
    yield put(loadHistoriesSuccessAction(response.sort((a, b) => b.id - a.id)));
  } catch (err) {
    yield put(loadHistoriesErrorAction(err));
  }
}
// Individual exports for testing
export default function* myHistoriesPageSaga() {
  yield takeLatest(LOAD_HISTORIES_ACTION, sagaHistoriesPage);
}
