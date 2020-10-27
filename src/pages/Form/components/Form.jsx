import React, { memo } from 'react';
import FormComponent from './../../../components/Form/index';

import * as Validators from './validatiors'

const ProductForm = memo((props) => {

    const { onSubmit, initialValues } = props

    const dataFields = [
        {
            id: 'fullName',
            name: 'fullName',
            label: 'Full Name',
            type: 'input',
            placeholder: 'Ex: Demo Form',
            validator: Validators.nameValidator

        },
        {
            id: 'phoneNumber',
            name: 'phoneNumber',
            label: 'Phone Number',
            placeholder: '(999) 000-00-00-00',
            hint: 'Hint: Your active phone number.',
            type: 'phone',
            validator: Validators.phoneValidator
        },
        {
            id: 'email',
            name: 'email',
            label: 'Email',
            hint: 'Hint: Enter your personal email address.',
            type: 'email',
            placeholder: 'demo@gmail.com',
            validator: Validators.emailValidator

        },
        {
            id: 'arrivalDate',
            name: 'arrivalDate',
            label: 'Arrival Date',
            hint: 'Hint: Should be greater than today',
            type: 'date',
            placeholder: '20/10/2020',
            validator: Validators.arrivalDateValidator

        },
        {
            id: 'nightsCount',
            name: 'nightsCount',
            label: 'Number of Nights',
            format: 'n0',
            type: 'numeric',
            placeholder: '1',
            validator: Validators.nightsValidator

        },
        {
            id: 'guestsCount',
            name: 'guestsCount',
            label: 'Number of Guests',
            hint: 'Hint: Maximum 5 guests.',
            format: 'n0',
            type: 'numeric',
            placeholder: '1',
            validator: Validators.guestsValidator

        },
        {
            id: 'comments',
            name: 'comments',
            label: 'Comments',
            optional: true,
            type: 'textArea',
        },
        {
            id: 'terms',
            name: 'terms',
            label: 'I agree with terms and conditions',
            type: 'checkbox',
            validator: Validators.termsValidator

        }

    ]
    return (
        <FormComponent
            initialValues={initialValues}
            onSubmit={onSubmit}
            dataFields={dataFields}
            title='DEMO FORM COMPONENT'
        />
    )
})


export default ProductForm;