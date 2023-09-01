import React, { ReactNode, createContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { FormSchemaType } from 'schema';

interface FormProviderProps {
    children: ReactNode;
}

interface FormContextValue {
    onSubmit: SubmitHandler<FormSchemaType>;
}

const FormContext = createContext<FormContextValue | null>(null);

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const onSubmit: SubmitHandler<FormSchemaType> = value => {
        console.log(value);
    };

    const value: FormContextValue = { onSubmit };
    return <FormContext.Provider value={value}>{children} </FormContext.Provider>;
};

export { FormContext, FormProvider };
