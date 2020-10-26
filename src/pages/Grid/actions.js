import { createAction } from 'redux-actions';

import { GRID_NAMESPACE, ADD_ROW } from './constants';

export const addRow = createAction(  
    `${GRID_NAMESPACE}/${ADD_ROW}`,
);