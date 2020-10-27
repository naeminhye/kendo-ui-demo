export const FORM_DETAIL_NAMESPACE = 'FORM_DETAIL';

export const FormInitalState = {
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
  GET_FORM_DETAIL: 'getForm',
  GET_FORM_DETAIL_SUCCESS: 'getFormSuccess',
  GET_FORM_DETAIL_FAIL: 'getFormFail',

  ADD_FORM_DETAIL: 'addForm',
  ADD_FORM_DETAIL_SUCCESS: 'addFormSuccess',
  ADD_FORM_DETAIL_FAIL: 'addFormFail',
}