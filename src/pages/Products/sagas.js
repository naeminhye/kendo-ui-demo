import { all, takeEvery, put, select } from 'redux-saga/effects';

import {
    fetchProducts,
    addProduct,
  } from './actions';

export function* addProductSaga() {
  
    try {
      yield put(
          fetchProducts(),
      );
   } catch (e) {
   }
  }
  