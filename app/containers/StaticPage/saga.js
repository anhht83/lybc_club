import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_PAGE_ACTION } from './constants';
import { fetchPageErrorAction, fetchPageSuccessAction } from './actions';
import { API_ROOT } from '../App/constants';

export function* sagaFetchPage(action) {
  try {
    const { slug } = action;
    const response = yield call(
      request,
      `${API_ROOT}/wp/v2/pages?slug=${slug}&status=publish`,
    );
    yield put(fetchPageSuccessAction(response));
  } catch (err) {
    yield put(fetchPageErrorAction(err));
  }
}
// Individual exports for testing
export default function* staticPageSaga() {
  yield takeLatest(FETCH_PAGE_ACTION, sagaFetchPage);
}
