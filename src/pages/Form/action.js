import { createAction } from 'redux-actions';

import { FORM_DETAIL_NAMESPACE, ActionTypes } from './constant';

export const getForm = createAction(`${FORM_DETAIL_NAMESPACE}/${ActionTypes.GET_FORM_DETAIL}`);
export const getFormSuccess = createAction(`${FORM_DETAIL_NAMESPACE}/${ActionTypes.GET_FORM_DETAIL_SUCCESS}`);
export const getFormFail = createAction(`${FORM_DETAIL_NAMESPACE}/${ActionTypes.GET_FORM_DETAIL_FAIL}`);

export const addForm = createAction(`${FORM_DETAIL_NAMESPACE}/${ActionTypes.ADD_FORM_DETAIL}`);
export const addFormSuccess = createAction(`${FORM_DETAIL_NAMESPACE}/${ActionTypes.ADD_FORM_DETAIL_SUCCESS}`);
export const addFormFail = createAction(`${FORM_DETAIL_NAMESPACE}/${ActionTypes.ADD_FORM_DETAIL_FAIL}`);
