import { handleActions } from 'redux-actions';

import { FormInitalState } from './constant';

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
  },
  FormInitalState
);
