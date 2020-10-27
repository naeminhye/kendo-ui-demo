import { createAction } from 'redux-actions';

import { PRODUCT_DETAIL_NAMESPACE, ActionTypes } from './constants';

export const getProductDetail = createAction(`${PRODUCT_DETAIL_NAMESPACE}/${ActionTypes.GET_PRODUCT_DETAIL}`);
export const getProductDetailSuccess = createAction(`${PRODUCT_DETAIL_NAMESPACE}/${ActionTypes.GET_PRODUCT_DETAIL_SUCCESS}`);
export const getProductDetailFail = createAction(`${PRODUCT_DETAIL_NAMESPACE}/${ActionTypes.GET_PRODUCT_DETAIL_FAIL}`);

export const addProductDetail = createAction(`${PRODUCT_DETAIL_NAMESPACE}/${ActionTypes.ADD_PRODUCT_DETAIL}`);
export const addProductDetailSuccess = createAction(`${PRODUCT_DETAIL_NAMESPACE}/${ActionTypes.ADD_PRODUCT_DETAIL_SUCCESS}`);
export const addProductDetailFail = createAction(`${PRODUCT_DETAIL_NAMESPACE}/${ActionTypes.ADD_PRODUCT_DETAIL_FAIL}`);
