import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOGIN_ACTION } from './constants';
import { loginErrorAction, loginSuccessAction } from './actions';
import { ALLOW_ROLES_ACCESS_SITE, API_ROOT } from '../App/constants';
import { Auth } from '../App/helpers';

export function* sagaAuthLogin(action) {
  try {
    const { username, password } = action.credentials;
    const response = yield call(request, `${API_ROOT}/jwt-auth/v1/token`, {
      method: 'post',
      body: { username, password },
    });
    Auth.logIn(response);
    if (!Auth.hasOneOfRoles(ALLOW_ROLES_ACCESS_SITE)) {
      Auth.logout();
      yield put(
        loginErrorAction({
          message: 'No tienes permiso para acceder a este sitio',
        }),
      );
    } else {
      yield put(loginSuccessAction(response));
    }
  } catch (err) {
    yield put(loginErrorAction(err));
  }
}
// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN_ACTION, sagaAuthLogin);
}
