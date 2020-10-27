import { handleActions } from 'redux-actions';

import { productDetailInitalState } from './constants';

import * as actions from './actions';

export default handleActions(
  {
    [actions.getProductDetail]: (state) => ({
      ...state,
      loading: true,
    }),
    [actions.getProductDetailSuccess]: (state, {payload}) => ({
      ...state,
      data: payload,
      loading: false
    }),
    [actions.getProductDetailFail]: (state, { payload}) => ({
      ...state,
      loading: false,
      error: payload
    }),
  },
  productDetailInitalState
);
