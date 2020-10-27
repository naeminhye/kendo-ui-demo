export const FORM_DETAIL_NAMESPACE = 'FORM_DETAIL';

export const FormInitialState = {
  data: {
    fullName: '',
    phoneNumber: '',
    arrivalDate: new Date(),
    dateOfBirth: '',
    email: '',
    nightsCount: 0,
    guestsCount: 0,
    comments: '',
    terms: false
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