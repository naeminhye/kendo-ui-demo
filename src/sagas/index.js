import { call, all } from 'redux-saga/effects';
import FormSaga from '../pages/Form/saga';

export default function* rootSaga() {
  yield all([
    call(FormSaga),
  ])
}