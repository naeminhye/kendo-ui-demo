import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FormContainer from './components/Form';
import * as actions from './action';

const DemoForm = () => {
  const store = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getForm())
  }, [dispatch])

  const getProduct = useMemo(() => {
      return store.data
  }, [store.data])

  const onSubmit = () => {
    alert("submit")
  }

  return <FormContainer onSubmit={onSubmit} initialValues={getProduct} />
}
export default DemoForm;