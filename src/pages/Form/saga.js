import { put, takeLatest, all, call } from 'redux-saga/effects'
import * as actions from './action';

const mockData = {
  firstName: 'aaaa',
  lastName: 'wwwww',
  dateOfBirth: new Date(),
  email: 'llll',
  company: 'ww',
  userName: 'w',
  password: 'rrrrrr',
  twoFactor: false
}
function* getForm() {
  yield put(actions.getFormSuccess(mockData))
}

function* watcherGetForm() {
  yield takeLatest(actions.getForm, getForm)
}

export default function* FormSaga() {
  yield all([
    call(watcherGetForm)
  ]);
}