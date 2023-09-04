import { useContext } from 'react';
import { useForm } from 'react-hook-form';
// ~
import { ButtonStyled } from 'assets';
import { useAppSelector } from 'store';
import { TableContext } from 'context';
import './table.module.scss';

const TableTemplate = () => {
    const { listStudents } = useAppSelector(state => state.StudentsReducer);
    const { handleDeleteStudent, handleEditStudent, setSearchResult, onSubmit, searchResult } =
        useContext(TableContext);
    const { register, handleSubmit } = useForm<{ searchByName: string }>();

    return (
        <div className='max-w-screen-lg mx-auto border mt-4' onSubmit={handleSubmit(onSubmit)}>
            <form className='p-4'>
                <label htmlFor='search' className='block font-medium leading-6 text-gray-900'>
                    Tìm kiếm:
                </label>
                <div className='flex items-center mt-1'>
                    <input
                        type='text'
                        id='search'
                        placeholder='Nguyễn Văn A'
                        className='block w-1/2 mr-2 rounded-md border border-gray-400 py-1.5 px-2 text-gray-900'
                        {...register('searchByName', {
                            required: true,
                        })}
                    />
                    <ButtonStyled $type='success'>Tìm kiếm</ButtonStyled>
                    {searchResult.length ? (
                        <ButtonStyled $type='danger' className='ml-2' onClick={() => setSearchResult([])}>
                            Hủy bỏ
                        </ButtonStyled>
                    ) : null}
                </div>
            </form>

            <table className='w-full'>
                <thead className='bg-slate-900 text-white font-bold'>
                    <tr>
                        <th>Mã sinh viên</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {(!searchResult.length ? listStudents : searchResult).map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.email}</td>
                            <td className='text-center'>
                                <ButtonStyled $type='success' className='mr-2' onClick={handleEditStudent(student.id)}>
                                    Sửa
                                </ButtonStyled>
                                <ButtonStyled $type='danger' onClick={handleDeleteStudent(student.id)}>
                                    Xóa
                                </ButtonStyled>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableTemplate;
