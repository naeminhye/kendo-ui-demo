import React, { memo } from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import Button from 'antd/es/button'

import * as CustomFormInput from './customInput.jsx';

import { INPUT_TYPE } from './inputType';

const FormComponent = memo(({ onSubmit, initialValues = {}, dataFields = [], title = '' }) => {

  const renderComponent = (fieldRenderProps) => {
    switch (fieldRenderProps.type) {
      case INPUT_TYPE.CHECKBOX:
        return CustomFormInput.FormCheckbox(fieldRenderProps)
      // case INPUT_TYPE.DATE_PICKER_ANTD:
      //   return CustomFormInput.FormDatePickerAntd(fieldRenderProps)
      case INPUT_TYPE.DATE_PICKER:
        return CustomFormInput.FormDatePicker(fieldRenderProps)
      case INPUT_TYPE.NUMERIC:
        return CustomFormInput.FormNumericTextBox(fieldRenderProps)
      case INPUT_TYPE.RADIO:
        return CustomFormInput.FormRadioGroup(fieldRenderProps)
      case INPUT_TYPE.PHONE:
        return CustomFormInput.FormMaskedTextBox(fieldRenderProps)
      default:
        return CustomFormInput.FormInput(fieldRenderProps)
    }
  }

  return (
    <Form
      initialValues={initialValues}
      key={JSON.stringify(initialValues)}
      onSubmit={onSubmit}
      render={(formRenderProps) => (
        <FormElement style={{ width: 400 }}>
          <fieldset className={'k-form-fieldset'}>
            <legend className={'k-form-legend'}>{title}</legend>
            {dataFields.map(({ id, name, label, ...rest }) =>
              <Field
                id={id}
                key={id}
                name={name}
                label={label}
                component={renderComponent}
                {...rest}
              />
            )}
            <div className="k-form-buttons">
              <Button
                htmlType={'submit'}
                type='primary'
                disabled={!formRenderProps.allowSubmit}
              > Submit </Button>
              <Button onClick={formRenderProps.onFormReset}> Clear </Button>
            </div>
          </fieldset>
        </FormElement>
      )}
    />
  );
});

export default FormComponent;