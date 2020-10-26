import React, { useState } from 'react';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Form, Field } from '@progress/kendo-react-form';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import FormContainer from './FormContainer';

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

const CustomForm = (props) => {
    const initialForm = {
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        email: '',
        company: '',
        userName: '',
        password: '',
        twoFactor: false
    };
    const [showDialog, setShowDialog] = useState(false)

    const toggleDialog = () => {
        setShowDialog(!showDialog);
    }

    const handleSubmit = () => {
        setShowDialog(!showDialog);
    }

    return (
        <div className="container-fluid">
            <FormContainer>
                <Form
                    initialValues={initialForm}
                    onSubmit={handleSubmit}
                    render={(formRenderProps) => (
                        <form onSubmit={formRenderProps.onSubmit} className={'k-form'}>
                            <fieldset>
                                <legend>User Details</legend>
                                <div>
                                    <Field name={'firstName'} component={Input} label={'First name'} />
                                </div>
                                <div>
                                    <Field name={'lastName'} component={Input} label={'Last name'} />
                                </div>
                                <div style={{ marginTop: "1rem" }}>
                                    <Field name={'dateOfBirth'} component={DatePicker} label={'Date of Birth'} />
                                </div>
                                <div>
                                    <Field name={"email"} type={"email"} component={EmailInput} label={"Email"} validator={emailValidator} />
                                </div>
                                <div>
                                    <Field name={'company'} component={Input} label={'Your Company'} />
                                </div>
                            </fieldset>

                            <div className="text-right">
                                <button type="button" className="k-button" onClick={formRenderProps.onFormReset}>Clear</button> &nbsp;
                                <button type="submit" className="k-button k-primary" disabled={!formRenderProps.allowSubmit}>Submit</button>
                            </div>
                        </form>
                    )} />
            </FormContainer>
        </div>
    )
}

export default CustomForm;