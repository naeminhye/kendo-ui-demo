import { handleActions } from 'redux-actions';

import { gridInitalState } from './constants';

import * as actions from './actions';

const gridReducer = handleActions(
    {
        [actions.addRow]: state => ({
            ...state,
          }),
    },
    gridInitalState,
);

export default gridReducer;
