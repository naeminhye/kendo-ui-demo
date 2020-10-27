import { handleActions } from 'redux-actions';

import { productInitalState } from './constants';

import * as actions from './actions';

export default handleActions(
  {
    [actions.fetchProducts]: (state) => ({
      ...state,
    }),
    [actions.addProduct]: (state, { payload }) => {
        let item = payload;
    
        state.unshift(item);
        return state;
    },
    [actions.removeProduct]: (state, { payload }) => {
        let newData = [...state]
        let item = payload;
        let index = state.findIndex(p => (p === item) || (item.ProductID && p.ProductID === item.ProductID));
        if (index >= 0) {
            newData.splice(index, 1);
        }

        return newData;
    },
    [actions.updateProduct]: (state, { payload }) => {
        let item = payload;
        let index = state.findIndex(p => p === item || (item.ProductID && p.ProductID === item.ProductID));
        if (index >= 0) {
            state[index] = { ...item };
        }
        return state;
    }
  },
  productInitalState
);
