import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FormContainer from './components/Form';
import * as actions from './action';
import Button from 'antd/es/button'

const DemoForm = () => {
  const store = useSelector(state => state.form);
  const dispatch = useDispatch();

  const getDetailForm = useMemo(() => {
    return store.data
  }, [store.data])

  const onSubmit = useCallback((data) => {
    console.log('data', data);
    dispatch(actions.addForm(data))
  }, [dispatch])

  const getDetail = useCallback(() => {
    dispatch(actions.getForm())
  }, [dispatch])

  return (
    <div className="container my-3">
      <div className='col-12 col-lg-12'>
        <div className="row example-wrapper">
          <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
            <Button onClick={getDetail} type='primary' className="my-3" >Get Detail</Button>
            <div className="card-block">
              <FormContainer onSubmit={onSubmit} initialValues={getDetailForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default DemoForm;