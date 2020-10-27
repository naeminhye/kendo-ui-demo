import { put, takeLatest, all, call } from 'redux-saga/effects'
import * as actions from './actions';

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
function* getProductDetail() {
  yield put(actions.getProductDetailSuccess(mockData))
}

function* watcherGetProductDetail() {
  yield takeLatest(actions.getProductDetail, getProductDetail)
}

export default function* productDetailSaga() {
  yield all([
    call(watcherGetProductDetail)
  ]);
}