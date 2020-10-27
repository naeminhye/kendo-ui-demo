import React, { memo, useState } from 'react';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Form, Field } from '@progress/kendo-react-form';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => (emailRegex.test(value) ? "" : "Please enter a valid email.");

const EmailInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {
                visited && validationMessage &&
                (<div className={"k-required"}>{validationMessage}</div>)
            }
        </div>
    );
};

const ProductForm = memo((props) => {

    const { onSubmit, initialValues } = props

    return (
        <div className="container-fluid">
            <div className='col-12 col-lg-9 border-right'>
                <div className="row example-wrapper">
                    <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                        <div className="card-block">
                            <Form
                                initialValues={initialValues}

                                key={JSON.stringify(initialValues)}
                                onSubmit={onSubmit}
                                render={(formRenderProps) => (
                                    <form onSubmit={formRenderProps.onSubmit} className={'k-form'}>
                                        <fieldset>
                                            <legend>User Details</legend>
                                            <Field name={'firstName'} component={Input} label={'First name'} />
                                            <Field name={'lastName'} component={Input} label={'Last name'} />
                                            <div style={{ marginTop: '1rem' }}>
                                                <Field name={'dateOfBirth'} component={DatePicker} label={'Date of Birth'} />
                                            </div>
                                            <Field name={"email"} type={"email"} component={EmailInput} label={"Email"} validator={emailValidator} />
                                            <Field name={'company'} component={Input} label={'Your Company'} />
                                        </fieldset>

                                        <div className="text-right">
                                            <button type="button" className="k-button" onClick={formRenderProps.onFormReset}>Clear</button> &nbsp;
                                <button type="submit" className="k-button k-primary" disabled={!formRenderProps.allowSubmit}>Submit</button>
                                        </div>
                                    </form>
                                )} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})


export default ProductForm;