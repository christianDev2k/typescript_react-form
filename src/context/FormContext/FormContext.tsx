import React, { ReactNode, createContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// ~
import { FormSchemaType } from 'schema';
import { StudentsActions } from 'store/reducers/SinhVienReducer/slice';

interface FormProviderProps {
    children: ReactNode;
}

interface FormContextValue {
    onSubmit: SubmitHandler<FormSchemaType>;
}

const FormContext = createContext<FormContextValue>({} as FormContextValue);

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const dispatch = useDispatch();

    // Handle onsubmit
    const onSubmit: SubmitHandler<FormSchemaType> = value => {
        dispatch(StudentsActions.addStudent(value));
    };

    // Value context
    const value: FormContextValue = { onSubmit };
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export { FormContext, FormProvider };
