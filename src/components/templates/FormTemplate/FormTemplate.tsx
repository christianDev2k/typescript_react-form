import { useContext, useEffect } from 'react';
// ~
import { ButtonStyled } from 'assets';
import { ErrorsStyled, InputStyled } from './StyledForm';
import { FormContext } from 'context';
import { useAppSelector } from 'store';

const FormTemplate = () => {
    console.log('Form render');
    const { onSubmit, register, handleSubmit, reset, handleCancelEdit, errors, isSubmitSuccessful } =
        useContext(FormContext);
    const { editStudent } = useAppSelector(state => state.StudentsReducer);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                name: '',
                phoneNumber: '',
                email: '',
            });
        }
    });

    useEffect(() => {
        if (editStudent) {
            const { name, phoneNumber, email } = editStudent.student;
            reset({
                name,
                phoneNumber,
                email,
            });
        }
    }, [editStudent, reset]);

    return (
        <div className='max-w-screen-lg mx-auto border' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center bg-slate-900 text-white text-2xl font-bold p-2 mb-0'>Thông tin sinh viên</h1>
            <form noValidate className='grid grid-rows-2 gap-4 p-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor=''>Họ và tên</label>
                        <InputStyled type='text' placeholder='VD: Nguyen Van A' {...register('name')} />
                        {errors.name && <ErrorsStyled>{errors.name.message}</ErrorsStyled>}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor=''>Số điện thoại</label>
                        <InputStyled type='text' placeholder='VD: 0976777777' {...register('phoneNumber')} />
                        {errors.phoneNumber && <ErrorsStyled>{errors.phoneNumber.message}</ErrorsStyled>}
                    </div>
                    <div>
                        <label htmlFor=''>Email</label>
                        <InputStyled type='text' placeholder='VD: nhandeptrai@gmail.com' {...register('email')} />
                        {errors.email && <ErrorsStyled>{errors.email.message}</ErrorsStyled>}
                    </div>
                </div>
                <div>
                    {!editStudent ? (
                        <ButtonStyled $type='success'>Thêm sinh viên</ButtonStyled>
                    ) : (
                        <div>
                            <ButtonStyled $type='success'>Chỉnh sửa sinh viên</ButtonStyled>
                            <ButtonStyled $type='danger' className='ml-2' onClick={handleCancelEdit}>
                                Hủy cập nhật
                            </ButtonStyled>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default FormTemplate;
