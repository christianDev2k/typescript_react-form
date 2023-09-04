import React, { ReactNode, createContext } from 'react';
import { SubmitHandler, UseFormHandleSubmit, FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// ~
import { FormSchema, FormSchemaType } from 'schema';
import { StudentsActions } from 'store/reducers/SinhVienReducer/slice';
import { Form } from 'types';
import { useAppSelector } from 'store';

interface FormProviderProps {
    children: ReactNode;
}

interface FormContextValue {
    onSubmit: SubmitHandler<FormSchemaType>;
    handleSubmit: UseFormHandleSubmit<Form>;
    register: UseFormRegister<Form>;
    reset: UseFormReset<Form>;
    handleCancelEdit: () => void;
    errors: FieldErrors<Form>;
    isSubmitSuccessful: boolean;
}

const FormContext = createContext<FormContextValue>({} as FormContextValue);

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const dispatch = useDispatch();
    const { editStudent } = useAppSelector(state => state.StudentsReducer);

    // React-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm<FormSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(FormSchema),
    });

    // Handle onsubmit
    const onSubmit: SubmitHandler<FormSchemaType> = value => {
        if (!editStudent) {
            dispatch(StudentsActions.addStudent(value));
            return;
        }
        dispatch(StudentsActions.updateStudent(value));
    };

    // handleCancelEdit
    const handleCancelEdit = () => {
        dispatch(StudentsActions.editStudent());
        reset({
            name: '',
            phoneNumber: '',
            email: '',
        });
    };

    // Value context
    const value: FormContextValue = {
        onSubmit,
        register,
        handleSubmit,
        reset,
        handleCancelEdit,
        errors,
        isSubmitSuccessful,
    };
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export { FormContext, FormProvider };
