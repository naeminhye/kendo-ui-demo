import { createAction } from 'redux-actions';

import { PRODUCT_NAMESPACE, ActionTypes } from './constants';

export const getProducts = createAction(  
    `${PRODUCT_NAMESPACE}/${ActionTypes.GET_PRODUCTS}`,
);

export const addProduct = createAction(  
    `${PRODUCT_NAMESPACE}/${ActionTypes.ADD_PRODUCT}`,
);

export const removeProduct = createAction(  
    `${PRODUCT_NAMESPACE}/${ActionTypes.REMOVE_PRODUCT}`,
);

export const updateProduct = createAction(  
    `${PRODUCT_NAMESPACE}/${ActionTypes.UPDATE_PRODUCT}`,
);