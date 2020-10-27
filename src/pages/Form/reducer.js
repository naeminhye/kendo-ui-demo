import { handleActions } from 'redux-actions';

import { FormInitialState } from './constant';

import * as actions from './action';

export default handleActions(
  {
    [actions.getForm]: (state) => ({
      ...state,
      loading: true,
    }),
    [actions.getFormSuccess]: (state, {payload}) => ({
      ...state,
      data: payload,
      loading: false
    }),
    [actions.getFormFail]: (state, { payload}) => ({
      ...state,
      loading: false,
      error: payload
    }),

    [actions.addForm]: (state) => ({
      ...state,
      loading: true,
    }),
    [actions.addFormSuccess]: (state, { payload }) => ({
      ...state,
      data: payload,
      loading: false
    }),
    [actions.addFormFail]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload
    }),
    
  },
  FormInitialState
);
