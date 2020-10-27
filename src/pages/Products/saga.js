import { all, takeEvery, put, select, call } from 'redux-saga/effects';

import {
    fetchProducts,
  } from './actions';

import { PRODUCT_NAMESPACE, ActionTypes } from './constants';

function* addProductSaga({ payload }) {
  yield put(fetchProducts());
}
  
function* removeProductSaga({ payload }) {
  yield put(fetchProducts());
}
  
function* updateProductSaga({ payload }) {
  yield put(fetchProducts());
}

function* productSagasWatcher() {
  yield takeEvery(`${PRODUCT_NAMESPACE}/${ActionTypes.ADD_PRODUCT}`, addProductSaga);
  yield takeEvery(`${PRODUCT_NAMESPACE}/${ActionTypes.REMOVE_PRODUCT}`, removeProductSaga);
  yield takeEvery(`${PRODUCT_NAMESPACE}/${ActionTypes.UPDATE_PRODUCT}`, updateProductSaga);
}

export default function* productSaga() {
  yield all([
    productSagasWatcher(),
  ]);
}