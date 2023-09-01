import { ButtonStyled } from 'assets';
import './table.module.scss';

const TableTemplate = () => {
    return (
        <div className='max-w-screen-lg mx-auto border mt-4'>
            <div className='p-4'>
                <label htmlFor='search' className='block font-medium leading-6 text-gray-900'>
                    Tìm kiếm:
                </label>
                <div className='flex items-center mt-1'>
                    <input
                        type='text'
                        id='search'
                        placeholder='Nguyễn Văn A'
                        className='block w-1/2 mr-2 rounded-md border border-gray-400 py-1.5 px-2 text-gray-900'
                    />
                    <ButtonStyled $type='success'>Tìm kiếm</ButtonStyled>
                    {/* {searchResults?.length ? (
                        <ButtonStyled type='danger' onClick={handleCancelSearch} className='ml-2'>
                            Hủy bỏ
                        </ButtonStyled>
                    ) : null} */}
                </div>
            </div>

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
                    {/* {(searchResults?.length ? searchResults : students).map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td className='text-center'>
                                <ButtonStyled className='mr-2' onClick={handleEdit(student.id)}>
                                    Sửa
                                </ButtonStyled>
                                <ButtonStyled type='danger' onClick={handleDelete(student.id)}>
                                    Xóa
                                </ButtonStyled>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default TableTemplate;
