export const PRODUCT_DETAIL_NAMESPACE = 'product_detail';

export const productDetailInitalState = {
  data: {
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    email: '',
    company: '',
    userName: '',
    password: '',
    twoFactor: false
  },
  loading: false,
  error: null,
  
};

export const ActionTypes = {
  GET_PRODUCT_DETAIL: 'getProductDetail',
  GET_PRODUCT_DETAIL_SUCCESS: 'getProductDetailSuccess',
  GET_PRODUCT_DETAIL_FAIL: 'getProductDetailFail',

  ADD_PRODUCT_DETAIL: 'addProductDetail',
  ADD_PRODUCT_DETAIL_SUCCESS: 'addProductDetailSuccess',
  ADD_PRODUCT_DETAIL_FAIL: 'addProductDetailFail',
}