import { handleActions } from 'redux-actions';

import { productInitalState } from './constants';

import * as actions from './actions';

export default handleActions(
    {
        [actions.getProducts]: state => ({
            ...state,
        }),
        [actions.addProduct]: state => ({
            ...state,
            }),
        [actions.removeProduct]: state => ({
            ...state,
        }),
    },
    productInitalState,
);
