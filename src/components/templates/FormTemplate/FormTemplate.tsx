import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
// ~
import { ButtonStyled } from 'assets';
import { FormSchema, FormSchemaType } from 'schema';
import { ErrorsStyled, InputStyled } from './StyledForm';
import { FormContext } from 'context';

const FormTemplate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(FormSchema),
    });

    // dòng này báo lỗi onsubmit không tồn tại trong type FormContextValue
    const { onSubmit } = useContext(FormContext);

    return (
        <div className='max-w-screen-lg mx-auto border' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center bg-slate-900 text-white text-2xl font-bold p-2 mb-0'>Thông tin sinh viên</h1>
            <form noValidate className='grid grid-rows-2 gap-4 p-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor=''>Mã sinh viên</label>
                        <InputStyled
                            type='text'
                            placeholder='Mã sinh viên tối đa 6 kí tự chữ và số'
                            {...register('id')}
                        />
                        {errors.id && <ErrorsStyled>{errors.id.message}</ErrorsStyled>}
                    </div>
                    <div>
                        <label htmlFor=''>Họ và tên</label>
                        <InputStyled type='text' placeholder='Nguyen Van A' {...register('name')} />
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
                        <InputStyled type='text' placeholder='nhandeptrai@gmail.com' {...register('email')} />
                        {errors.email && <ErrorsStyled>{errors.email.message}</ErrorsStyled>}
                    </div>
                </div>
                <div>
                    <ButtonStyled $type='success'>Thêm sinh viên</ButtonStyled>
                </div>
            </form>
        </div>
    );
};

export default FormTemplate;
