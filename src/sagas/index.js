import { call, all } from 'redux-saga/effects';
import FormSaga from '../pages/Form/saga';
import productSaga from '../pages/Products/saga';

export default function* rootSaga() {
  yield all([
    call(FormSaga),
    call(productSaga),
  ])
}