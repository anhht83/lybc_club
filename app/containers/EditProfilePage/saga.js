import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { EDIT_PROFILE_ACTION, LOAD_PROFILE_ACTION } from './constants';
import {
  editProfileErrorAction,
  editProfileSuccessAction,
  loadProfileErrorAction,
  loadProfileSuccessAction,
} from './actions';
import { API_ROOT } from '../App/constants';

export function* sagaLoadProfile() {
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

export function* sagaEditProfile(action) {
  try {
    const { data } = action;
    const response = yield call(request, `${API_ROOT}/wp/v2/edit-profile`, {
      method: 'post',
      body: data,
    });
    yield put(editProfileSuccessAction(response));
  } catch (err) {
    yield put(editProfileErrorAction(err));
  }
}
// Individual exports for testing
export default function* editProfilePageSaga() {
  yield takeLatest(LOAD_PROFILE_ACTION, sagaLoadProfile);
  yield takeLatest(EDIT_PROFILE_ACTION, sagaEditProfile);
}
