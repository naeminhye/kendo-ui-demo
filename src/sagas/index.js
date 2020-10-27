import { call, all } from 'redux-saga/effects';
import productDetailSaga from '../pages/ProductDetail/sagas';

export default function* rootSaga() {
  yield all([
    call(productDetailSaga),
  ])
}