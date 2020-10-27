import { put, takeLatest, all, call } from 'redux-saga/effects'
import * as actions from './action';

const mockData = {
  fullName: 'Demo Form',
  phoneNumber: '02909309309',
  arrivalDate: new Date(),
  dateOfBirth: '31/12/2000',
  email: 'demo@gmail.com',
  nightsCount: 2,
  guestsCount: 4,
  comments: '',
  terms: false
}

function* getForm() {
  yield put(actions.getFormSuccess(mockData))
}

function* watcherGetForm() {
  yield takeLatest(actions.getForm, getForm)
}

function* addForm(payload) {
  yield put(actions.addFormSuccess(payload))
}

function* watcherAddForm() {
  yield takeLatest(actions.addForm, addForm)
}


export default function* FormSaga() {
  yield all([
    call(watcherGetForm),
    call(watcherAddForm)
  ]);
}